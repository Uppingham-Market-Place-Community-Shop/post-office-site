import { useEffect, useState } from "react";
import { FileText, Newspaper, Megaphone, Download, ExternalLink, Loader2, FolderOpen } from "lucide-react";
import Layout from "@/components/Layout";

const GOOGLE_API_KEY = "AIzaSyBqJMngx-LOkDxTU4rb1n5eiVp09ooH-ic";
const ROOT_FOLDER_ID = "1CqveOL3XOrzAwWuUUtmKOHcVnburI9Ow";

type DriveFile = {
  id: string;
  name: string;
  mimeType: string;
  createdTime: string;
  modifiedTime: string;
  description?: string;
};

type DriveFolder = {
  id: string;
  name: string;
  files: DriveFile[];
};

const FOLDER_ICONS: Record<string, React.ElementType> = {
  default: FolderOpen,
  newsletter: FileText,
  press: Megaphone,
  newspaper: Newspaper,
  article: Newspaper,
};

function getFolderIcon(name: string): React.ElementType {
  const lower = name.toLowerCase();
  if (lower.includes("newsletter")) return FOLDER_ICONS.newsletter;
  if (lower.includes("press")) return FOLDER_ICONS.press;
  if (lower.includes("newspaper") || lower.includes("article")) return FOLDER_ICONS.article;
  return FOLDER_ICONS.default;
}

function getFileUrls(file: DriveFile): { view: string; download: string } {
  const { id, mimeType } = file;
  switch (mimeType) {
    case "application/vnd.google-apps.document":
      return {
        view: `https://docs.google.com/document/d/${id}/view`,
        download: `https://docs.google.com/document/d/${id}/export?format=pdf`,
      };
    case "application/vnd.google-apps.spreadsheet":
      return {
        view: `https://docs.google.com/spreadsheets/d/${id}/view`,
        download: `https://docs.google.com/spreadsheets/d/${id}/export?format=xlsx`,
      };
    case "application/vnd.google-apps.presentation":
      return {
        view: `https://docs.google.com/presentation/d/${id}/view`,
        download: `https://docs.google.com/presentation/d/${id}/export/pdf`,
      };
    default:
      return {
        view: `https://drive.google.com/file/d/${id}/view`,
        download: `https://drive.google.com/uc?export=download&id=${id}`,
      };
  }
}

function formatDate(iso: string) {
  if (!iso) return "";
  return new Date(iso).toLocaleDateString("en-GB", { year: "numeric", month: "long" });
}

async function fetchJSON(url: string) {
  const res = await fetch(url);
  if (!res.ok) throw new Error(`Drive API error: ${res.status}`);
  return res.json();
}

async function fetchSubfolders(): Promise<DriveFolder[]> {
  const url = `https://www.googleapis.com/drive/v3/files?q=%271kJne4CQeKItY4GX6eylJR9oYkyTFwHFV%27+in+parents+and+mimeType%3D%27application%2Fvnd.google-apps.folder%27+and+trashed%3Dfalse&fields=files(id%2Cname)&orderBy=name&key=${GOOGLE_API_KEY}`;
  const data = await fetchJSON(url);
  return (data.files || []).map((f: { id: string; name: string }) => ({ id: f.id, name: f.name, files: [] }));
}

async function fetchFilesInFolder(folderId: string): Promise<DriveFile[]> {
  const url = `https://www.googleapis.com/drive/v3/files?q=%27${folderId}%27+in+parents+and+mimeType+%21%3D+%27application%2Fvnd.google-apps.folder%27+and+trashed%3Dfalse&fields=files(id%2Cname%2CmimeType%2CcreatedTime%2CmodifiedTime%2Cdescription)&orderBy=modifiedTime+desc&key=${GOOGLE_API_KEY}`;
  const data = await fetchJSON(url);
  return data.files || [];
}

const DocumentSection = ({ folder }: { folder: DriveFolder }) => {
  const Icon = getFolderIcon(folder.name);

  if (folder.files.length === 0) {
    return (
      <section className="mb-12">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
            <Icon className="text-primary" size={20} />
          </div>
          <h2 className="text-2xl font-display font-bold">{folder.name}</h2>
        </div>
        <p className="text-muted-foreground text-sm italic">No documents in this folder yet.</p>
      </section>
    );
  }

  return (
    <section className="mb-12">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
          <Icon className="text-primary" size={20} />
        </div>
        <h2 className="text-2xl font-display font-bold">{folder.name}</h2>
        <span className="text-sm text-muted-foreground">({folder.files.length})</span>
      </div>
      <div className="grid gap-4">
        {folder.files.map((file) => {
          const { view, download } = getFileUrls(file);
          return (
            <div
              key={file.id}
              className="flex items-center justify-between bg-card border border-border rounded-lg p-5 hover:shadow-md hover:border-primary/30 transition-all group"
            >
              <div className="flex-1 min-w-0">
                <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors truncate">
                  {file.name.replace(/-/g, " ")}
                </h3>
                {file.description && (
                  <p className="text-sm text-muted-foreground mt-1">{file.description}</p>
                )}
                <span className="text-xs text-muted-foreground mt-1 block">
                  {formatDate(file.modifiedTime || file.createdTime)}
                </span>
              </div>
              <div className="ml-4 flex items-center gap-2">
                <a
                  href={view}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-md hover:bg-primary/10 text-muted-foreground hover:text-primary transition-colors"
                  title="View"
                >
                  <ExternalLink size={18} />
                </a>
                <a
                  href={download}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-md hover:bg-primary/10 text-muted-foreground hover:text-primary transition-colors"
                  title="Download as PDF"
                >
                  <Download size={18} />
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

const Documents = () => {
  const [folders, setFolders] = useState<DriveFolder[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const load = async () => {
      try {
        setLoading(true);
        setError(null);
        const subfolders = await fetchSubfolders();
        const withFiles = await Promise.all(
          subfolders.map(async (folder) => ({
            ...folder,
            files: await fetchFilesInFolder(folder.id),
          }))
        );
        setFolders(withFiles);
      } catch (e) {
        setError("Unable to load documents from Google Drive. Please try again later.");
        console.error(e);
      } finally {
        setLoading(false);
      }
    };
    load();
  }, []);

  return (
    <Layout>
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-3xl md:text-4xl font-display font-bold mb-2">Documents</h1>
        <p className="text-muted-foreground mb-10 max-w-2xl">
          Browse and download our newsletters, press releases, and newspaper articles —
          sourced directly from our Google Drive and updated automatically.
        </p>

        {loading && (
          <div className="flex items-center justify-center py-24 gap-3 text-muted-foreground">
            <Loader2 className="animate-spin" size={24} />
            <span>Loading documents…</span>
          </div>
        )}

        {error && (
          <div className="bg-destructive/10 border border-destructive/30 text-destructive rounded-lg p-6 text-center">
            {error}
          </div>
        )}

        {!loading && !error && folders.length === 0 && (
          <p className="text-muted-foreground text-center py-16">No folders found in the Documents drive.</p>
        )}

        {!loading && !error && folders.map((folder) => (
          <DocumentSection key={folder.id} folder={folder} />
        ))}
      </div>
    </Layout>
  );
};

export default Documents;
