import type { Meta, StoryObj } from "@storybook/react";
import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell, TableCaption } from "./Table";
import { Badge } from "./Badge";

const meta: Meta<typeof Table> = {
  title: "Primitives/Table",
  component: Table,
  parameters: {
    layout: "padded",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Metrika</TableHead>
          <TableHead>Popis</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableCell className="font-medium text-text-heading">Share of Search</TableCell>
          <TableCell>Váš podiel na trhu vs. konkurencia</TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="font-medium text-text-heading">Search Volume</TableCell>
          <TableCell>Priemerný mesačný objem vyhľadávania</TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="font-medium text-text-heading">YoY Growth</TableCell>
          <TableCell>Medziročný rast alebo pokles</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  ),
};

export const JobHistory: Story = {
  render: () => (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Job ID</TableHead>
          <TableHead>Company</TableHead>
          <TableHead>Platforms</TableHead>
          <TableHead>Status</TableHead>
          <TableHead>Created</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow clickable>
          <TableCell className="font-mono text-xs text-text-caption">abc-123</TableCell>
          <TableCell className="font-medium text-text-heading">Kaufland SK</TableCell>
          <TableCell>
            <div className="flex gap-1">
              <Badge size="sm" variant="default">Facebook</Badge>
              <Badge size="sm" variant="default">Instagram</Badge>
            </div>
          </TableCell>
          <TableCell><Badge variant="success" size="sm">Completed</Badge></TableCell>
          <TableCell className="text-text-caption">10.02.2026</TableCell>
        </TableRow>
        <TableRow clickable>
          <TableCell className="font-mono text-xs text-text-caption">def-456</TableCell>
          <TableCell className="font-medium text-text-heading">Billa SK</TableCell>
          <TableCell>
            <Badge size="sm" variant="default">Facebook</Badge>
          </TableCell>
          <TableCell><Badge variant="warning" size="sm">Pending</Badge></TableCell>
          <TableCell className="text-text-caption">09.02.2026</TableCell>
        </TableRow>
        <TableRow clickable>
          <TableCell className="font-mono text-xs text-text-caption">ghi-789</TableCell>
          <TableCell className="font-medium text-text-heading">Tesco SK</TableCell>
          <TableCell>
            <div className="flex gap-1">
              <Badge size="sm" variant="default">Facebook</Badge>
              <Badge size="sm" variant="default">Instagram</Badge>
              <Badge size="sm" variant="default">Meta Ads</Badge>
            </div>
          </TableCell>
          <TableCell><Badge variant="destructive" size="sm">Failed</Badge></TableCell>
          <TableCell className="text-text-caption">08.02.2026</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  ),
};

export const MetricsComparison: Story = {
  render: () => (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead sortable>Company</TableHead>
          <TableHead sortable>Followers</TableHead>
          <TableHead sortable>Posts</TableHead>
          <TableHead sortable>Engagement</TableHead>
          <TableHead sortable>Share of Search</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableCell className="font-medium text-text-heading">Kaufland</TableCell>
          <TableCell>245,000</TableCell>
          <TableCell>89</TableCell>
          <TableCell>3.2%</TableCell>
          <TableCell className="font-medium">34.2%</TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="font-medium text-text-heading">Billa</TableCell>
          <TableCell>198,000</TableCell>
          <TableCell>67</TableCell>
          <TableCell>2.8%</TableCell>
          <TableCell className="font-medium">28.1%</TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="font-medium text-text-heading">Lidl</TableCell>
          <TableCell>312,000</TableCell>
          <TableCell>102</TableCell>
          <TableCell>4.1%</TableCell>
          <TableCell className="font-medium">22.5%</TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="font-medium text-text-heading">Tesco</TableCell>
          <TableCell>156,000</TableCell>
          <TableCell>45</TableCell>
          <TableCell>1.9%</TableCell>
          <TableCell className="font-medium">15.2%</TableCell>
        </TableRow>
      </TableBody>
      <TableCaption>Dáta za posledných 30 dní</TableCaption>
    </Table>
  ),
};

export const WithSortableHeaders: Story = {
  render: () => (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead sortable>Competitor ↕</TableHead>
          <TableHead sortable>Likes ↕</TableHead>
          <TableHead sortable>Comments ↕</TableHead>
          <TableHead sortable>Date ↕</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow clickable>
          <TableCell className="font-medium text-text-heading">Kaufland SK</TableCell>
          <TableCell>1,234</TableCell>
          <TableCell>89</TableCell>
          <TableCell className="text-text-caption">10.02.2026</TableCell>
        </TableRow>
        <TableRow clickable>
          <TableCell className="font-medium text-text-heading">Billa SK</TableCell>
          <TableCell>987</TableCell>
          <TableCell>56</TableCell>
          <TableCell className="text-text-caption">09.02.2026</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  ),
};
