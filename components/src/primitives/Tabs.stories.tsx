import type { Meta, StoryObj } from "@storybook/react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "./Tabs";

const meta: Meta<typeof Tabs> = {
  title: "Primitives/Tabs",
  component: Tabs,
  parameters: {
    layout: "padded",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Tabs defaultValue="new" style={{ maxWidth: 600 }}>
      <TabsList>
        <TabsTrigger value="new">New Analysis</TabsTrigger>
        <TabsTrigger value="history">Job History</TabsTrigger>
      </TabsList>
      <TabsContent value="new">
        <p className="font-text text-text-body">Create a new competitor analysis by filling in the form below.</p>
      </TabsContent>
      <TabsContent value="history">
        <p className="font-text text-text-body">Your previous analyses will appear here.</p>
      </TabsContent>
    </Tabs>
  ),
};

export const ThreeTabs: Story = {
  render: () => (
    <Tabs defaultValue="overview" style={{ maxWidth: 600 }}>
      <TabsList>
        <TabsTrigger value="overview">AI Overview</TabsTrigger>
        <TabsTrigger value="metrics">Metrics</TabsTrigger>
        <TabsTrigger value="posts">Top Posts</TabsTrigger>
      </TabsList>
      <TabsContent value="overview">
        <p className="font-text text-text-body">AI-generated overview of competitor landscape.</p>
      </TabsContent>
      <TabsContent value="metrics">
        <p className="font-text text-text-body">Detailed metrics comparison across competitors.</p>
      </TabsContent>
      <TabsContent value="posts">
        <p className="font-text text-text-body">Top performing posts from all competitors.</p>
      </TabsContent>
    </Tabs>
  ),
};

export const ReportTabs: Story = {
  render: () => (
    <Tabs defaultValue="sos" style={{ maxWidth: 600 }}>
      <TabsList>
        <TabsTrigger value="sos">Share of Search</TabsTrigger>
        <TabsTrigger value="volume">Volume Trends</TabsTrigger>
        <TabsTrigger value="growth">YoY Growth</TabsTrigger>
      </TabsList>
      <TabsContent value="sos">
        <div className="bg-birne-sand-20 rounded-md p-4">
          <p className="font-text text-sm text-text-body">Share of Search stacked bar chart placeholder</p>
        </div>
      </TabsContent>
      <TabsContent value="volume">
        <div className="bg-birne-sand-20 rounded-md p-4">
          <p className="font-text text-sm text-text-body">Volume trends line chart placeholder</p>
        </div>
      </TabsContent>
      <TabsContent value="growth">
        <div className="bg-birne-sand-20 rounded-md p-4">
          <p className="font-text text-sm text-text-body">Year-over-year growth heatmap placeholder</p>
        </div>
      </TabsContent>
    </Tabs>
  ),
};
