import CaseStudyClient from "./CaseStudyClient";

type PageProps = {
  searchParams?: Promise<Record<string, string | string[] | undefined>>;
};

export default async function CaseStudyPage({ searchParams }: PageProps) {
  const params = await searchParams;
  const view = Array.isArray(params?.view) ? params.view[0] : params?.view;

  return <CaseStudyClient initialMode={view === "report" ? "report" : "sections"} />;
}
