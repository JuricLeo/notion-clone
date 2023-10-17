import { Navbar } from "./_components/navbar";

const MarketingLayout = ({ children }: { children: React.ReactNode }) => {
  return ( 
    <div className="dark:bg-[#1F1F1F]">
      <Navbar />
      <main className="pt-40 dark:bg-[#1F1F1F]">
        {children}
      </main>
    </div>
   );
}
 
export default MarketingLayout;