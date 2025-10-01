import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs.js'

const CustomTabs = () => {
  return (
    <Tabs defaultValue="Home" className="w-full">
      <TabsList className="header-layout w-full ">
        <TabsTrigger value="Home" className=" text-gradient text-responsive">
          Home
        </TabsTrigger>
        <TabsTrigger value="Leaderboard" className=" text-gradient text-responsive">
          Leaderboard
        </TabsTrigger>
        <TabsTrigger value="Compare" className=" text-gradient text-responsive">
          Compare
        </TabsTrigger>
      </TabsList>
      <TabsContent value="Home">Make changes to your account here.</TabsContent>
      <TabsContent value="Leaderboard">Change your password here.</TabsContent>
      <TabsContent value="Compare">Hello price compare</TabsContent>
    </Tabs>
  )
}

export default CustomTabs
