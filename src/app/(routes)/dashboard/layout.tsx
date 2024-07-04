import { HeaderTitles } from "@/components/molecules/HeaderTitles";
import { ArrowTitles } from "@/components/molecules/ArrowTitles";
export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <section className="container mx-auto">
        <HeaderTitles></HeaderTitles>
        <ArrowTitles></ArrowTitles>
        {children}
      </section>
  );
}
