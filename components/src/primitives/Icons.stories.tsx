import type { Meta, StoryObj } from "@storybook/react";
import { IconCircle } from "./IconCircle";
import { Card } from "./Card";
import { ContentStack } from "./ContentStack";
import { Heading, Text } from "./Typography";
import {
  // Navigation
  ArrowRight, ArrowLeft, ArrowUp, ArrowDown,
  ChevronRight, ChevronLeft, ChevronUp, ChevronDown,
  ExternalLink, Home, Menu, X,

  // Actions
  Search, Plus, Minus, Check, Copy, Download, Upload,
  Share2, Filter, RefreshCw, MoreHorizontal, MoreVertical,
  Edit, Trash2, Eye, EyeOff, Settings, LogOut,

  // Communication
  Mail, Send, MessageSquare, Bell, BellOff,

  // Data & Charts
  BarChart3, TrendingUp, TrendingDown, PieChart, Activity,

  // Content
  FileText, Image, Link, Calendar, Clock, Tag,

  // Status
  AlertCircle, AlertTriangle, CheckCircle, Info, HelpCircle,
  Loader2, CircleDot,

  // Social
  Globe, Users, User, Building2,

  // Misc
  Star, Heart, Zap, Shield, Lock, Unlock,
} from "lucide-react";

const meta: Meta = {
  title: "Tokens/Icons",
  parameters: {
    layout: "padded",
  },
  tags: ["autodocs"],
};

export default meta;

const IconItem = ({ icon: Icon, name }: { icon: React.ElementType; name: string }) => (
  <div className="flex flex-col items-center gap-2 p-3 rounded-md hover:bg-birne-black-2 transition-colors cursor-default" style={{ width: 90 }}>
    <Icon size={20} strokeWidth={1.5} className="text-text-heading" />
    <span className="font-mono text-[10px] text-text-caption text-center leading-tight">{name}</span>
  </div>
);

const IconSection = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <div className="mb-8">
    <h3 className="font-display text-lg text-text-heading mb-3">{title}</h3>
    <div className="flex flex-wrap gap-1">
      {children}
    </div>
  </div>
);

export const AllIcons: StoryObj = {
  name: "Prehľad ikon",
  render: () => (
    <div>
      <IconSection title="Navigácia">
        <IconItem icon={ArrowRight} name="ArrowRight" />
        <IconItem icon={ArrowLeft} name="ArrowLeft" />
        <IconItem icon={ArrowUp} name="ArrowUp" />
        <IconItem icon={ArrowDown} name="ArrowDown" />
        <IconItem icon={ChevronRight} name="ChevronRight" />
        <IconItem icon={ChevronLeft} name="ChevronLeft" />
        <IconItem icon={ChevronUp} name="ChevronUp" />
        <IconItem icon={ChevronDown} name="ChevronDown" />
        <IconItem icon={ExternalLink} name="ExternalLink" />
        <IconItem icon={Home} name="Home" />
        <IconItem icon={Menu} name="Menu" />
        <IconItem icon={X} name="X" />
      </IconSection>

      <IconSection title="Akcie">
        <IconItem icon={Search} name="Search" />
        <IconItem icon={Plus} name="Plus" />
        <IconItem icon={Minus} name="Minus" />
        <IconItem icon={Check} name="Check" />
        <IconItem icon={Copy} name="Copy" />
        <IconItem icon={Download} name="Download" />
        <IconItem icon={Upload} name="Upload" />
        <IconItem icon={Share2} name="Share2" />
        <IconItem icon={Filter} name="Filter" />
        <IconItem icon={RefreshCw} name="RefreshCw" />
        <IconItem icon={MoreHorizontal} name="MoreHorizontal" />
        <IconItem icon={MoreVertical} name="MoreVertical" />
        <IconItem icon={Edit} name="Edit" />
        <IconItem icon={Trash2} name="Trash2" />
        <IconItem icon={Eye} name="Eye" />
        <IconItem icon={EyeOff} name="EyeOff" />
        <IconItem icon={Settings} name="Settings" />
        <IconItem icon={LogOut} name="LogOut" />
      </IconSection>

      <IconSection title="Komunikácia">
        <IconItem icon={Mail} name="Mail" />
        <IconItem icon={Send} name="Send" />
        <IconItem icon={MessageSquare} name="MessageSquare" />
        <IconItem icon={Bell} name="Bell" />
        <IconItem icon={BellOff} name="BellOff" />
      </IconSection>

      <IconSection title="Dáta & Grafy">
        <IconItem icon={BarChart3} name="BarChart3" />
        <IconItem icon={TrendingUp} name="TrendingUp" />
        <IconItem icon={TrendingDown} name="TrendingDown" />
        <IconItem icon={PieChart} name="PieChart" />
        <IconItem icon={Activity} name="Activity" />
      </IconSection>

      <IconSection title="Obsah">
        <IconItem icon={FileText} name="FileText" />
        <IconItem icon={Image} name="Image" />
        <IconItem icon={Link} name="Link" />
        <IconItem icon={Calendar} name="Calendar" />
        <IconItem icon={Clock} name="Clock" />
        <IconItem icon={Tag} name="Tag" />
      </IconSection>

      <IconSection title="Status">
        <IconItem icon={AlertCircle} name="AlertCircle" />
        <IconItem icon={AlertTriangle} name="AlertTriangle" />
        <IconItem icon={CheckCircle} name="CheckCircle" />
        <IconItem icon={Info} name="Info" />
        <IconItem icon={HelpCircle} name="HelpCircle" />
        <IconItem icon={Loader2} name="Loader2" />
        <IconItem icon={CircleDot} name="CircleDot" />
      </IconSection>

      <IconSection title="Social & Používatelia">
        <IconItem icon={Globe} name="Globe" />
        <IconItem icon={Users} name="Users" />
        <IconItem icon={User} name="User" />
        <IconItem icon={Building2} name="Building2" />
      </IconSection>

      <IconSection title="Rôzne">
        <IconItem icon={Star} name="Star" />
        <IconItem icon={Heart} name="Heart" />
        <IconItem icon={Zap} name="Zap" />
        <IconItem icon={Shield} name="Shield" />
        <IconItem icon={Lock} name="Lock" />
        <IconItem icon={Unlock} name="Unlock" />
      </IconSection>
    </div>
  ),
};

export const Sizes: StoryObj = {
  name: "Veľkosti",
  render: () => (
    <div className="flex items-end gap-8">
      <div className="flex flex-col items-center gap-2">
        <ArrowRight size={14} strokeWidth={1.5} className="text-text-heading" />
        <span className="font-mono text-[10px] text-text-caption">14px</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <ArrowRight size={16} strokeWidth={1.5} className="text-text-heading" />
        <span className="font-mono text-[10px] text-text-caption">16px</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <ArrowRight size={20} strokeWidth={1.5} className="text-text-heading" />
        <span className="font-mono text-[10px] text-text-caption">20px</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <ArrowRight size={24} strokeWidth={1.5} className="text-text-heading" />
        <span className="font-mono text-[10px] text-text-caption">24px</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <ArrowRight size={32} strokeWidth={1.5} className="text-text-heading" />
        <span className="font-mono text-[10px] text-text-caption">32px</span>
      </div>
    </div>
  ),
};

export const StrokeWeights: StoryObj = {
  name: "Stroke Weights",
  render: () => (
    <div className="flex items-end gap-8">
      <div className="flex flex-col items-center gap-2">
        <ArrowRight size={24} strokeWidth={0.75} className="text-text-heading" />
        <span className="font-mono text-[10px] text-text-caption">0.75</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <ArrowRight size={24} strokeWidth={1} className="text-text-heading" />
        <span className="font-mono text-[10px] text-text-caption">1</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <ArrowRight size={24} strokeWidth={1.5} className="text-text-heading" />
        <span className="font-mono text-[10px] text-text-caption">1.5 (default)</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <ArrowRight size={24} strokeWidth={1.5} className="text-text-heading" />
        <span className="font-mono text-[10px] text-text-caption">1.5</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <ArrowRight size={24} strokeWidth={2} className="text-text-heading" />
        <span className="font-mono text-[10px] text-text-caption">2</span>
      </div>
    </div>
  ),
};

export const IconInCircles: StoryObj = {
  name: "Ikonky v kruhoch",
  render: () => (
    <div className="space-y-8">
      {/* Standalone vs Circle */}
      <div>
        <Text size="sm" variant="caption" className="mb-4">Samostatne vs. v kruhu</Text>
        <div className="flex items-center gap-6">
          <div className="flex flex-col items-center gap-2">
            <BarChart3 size={20} strokeWidth={1.5} className="text-text-heading" />
            <span className="font-text text-xs text-text-caption">Standalone</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <IconCircle size="sm"><BarChart3 size={16} strokeWidth={1.5} /></IconCircle>
            <span className="font-text text-xs text-text-caption">sm</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <IconCircle size="md"><BarChart3 size={20} strokeWidth={1.5} /></IconCircle>
            <span className="font-text text-xs text-text-caption">md</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <IconCircle size="lg"><BarChart3 size={24} strokeWidth={1.5} /></IconCircle>
            <span className="font-text text-xs text-text-caption">lg</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <IconCircle size="xl"><BarChart3 size={28} strokeWidth={1.5} /></IconCircle>
            <span className="font-text text-xs text-text-caption">xl</span>
          </div>
        </div>
      </div>

      {/* Varianty na bielom pozadí */}
      <div>
        <Text size="sm" variant="caption" className="mb-4">Varianty na bielom pozadí</Text>
        <div className="flex items-center gap-4">
          <div className="flex flex-col items-center gap-2">
            <IconCircle variant="default"><Settings size={20} strokeWidth={1.5} /></IconCircle>
            <span className="font-text text-xs text-text-caption">default</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <IconCircle variant="muted"><Settings size={20} strokeWidth={1.5} /></IconCircle>
            <span className="font-text text-xs text-text-caption">muted</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <IconCircle variant="dark"><Settings size={20} strokeWidth={1.5} /></IconCircle>
            <span className="font-text text-xs text-text-caption">dark</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <IconCircle variant="lemon"><Settings size={20} strokeWidth={1.5} /></IconCircle>
            <span className="font-text text-xs text-text-caption">lemon</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <IconCircle variant="purple"><Settings size={20} strokeWidth={1.5} /></IconCircle>
            <span className="font-text text-xs text-text-caption">purple</span>
          </div>
        </div>
      </div>

      {/* Sémantické */}
      <div>
        <Text size="sm" variant="caption" className="mb-4">Sémantické</Text>
        <div className="flex items-center gap-4">
          <div className="flex flex-col items-center gap-2">
            <IconCircle variant="success"><CheckCircle size={20} strokeWidth={1.5} /></IconCircle>
            <span className="font-text text-xs text-text-caption">success</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <IconCircle variant="warning"><AlertTriangle size={20} strokeWidth={1.5} /></IconCircle>
            <span className="font-text text-xs text-text-caption">warning</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <IconCircle variant="destructive"><AlertCircle size={20} strokeWidth={1.5} /></IconCircle>
            <span className="font-text text-xs text-text-caption">destructive</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <IconCircle variant="info"><Info size={20} strokeWidth={1.5} /></IconCircle>
            <span className="font-text text-xs text-text-caption">info</span>
          </div>
        </div>
      </div>

      {/* V kartách */}
      <div>
        <Text size="sm" variant="caption" className="mb-4">V kartách</Text>
        <div className="flex gap-4">
          <Card variant="default" style={{ width: 200 }}>
            <ContentStack spacing="tight">
              <IconCircle variant="muted"><TrendingUp size={20} strokeWidth={1.5} /></IconCircle>
              <Heading level="h6">Default karta</Heading>
              <Text size="xs" variant="caption">muted variant</Text>
            </ContentStack>
          </Card>
          <Card variant="dark" style={{ width: 200 }}>
            <ContentStack spacing="tight">
              <IconCircle variant="ghost"><TrendingUp size={20} strokeWidth={1.5} /></IconCircle>
              <Heading level="h6" className="text-birne-lemon">Dark karta</Heading>
              <Text size="xs" className="text-white/60">ghost variant</Text>
            </ContentStack>
          </Card>
          <Card variant="purple" style={{ width: 200 }}>
            <ContentStack spacing="tight">
              <IconCircle variant="purple"><TrendingUp size={20} strokeWidth={1.5} /></IconCircle>
              <Heading level="h6">Purple karta</Heading>
              <Text size="xs" variant="caption">purple variant</Text>
            </ContentStack>
          </Card>
        </div>
      </div>
    </div>
  ),
};

export const Usage: StoryObj = {
  name: "Použitie",
  render: () => (
    <div className="max-w-md space-y-4">
      <div className="bg-birne-black-2 rounded-md p-4">
        <pre className="font-mono text-xs text-text-body">
{`import { ArrowRight } from "lucide-react";
import { IconCircle } from "@birne/design-system";

// Standalone
<ArrowRight size={20} strokeWidth={1.5} />

// V kruhu
<IconCircle variant="default" size="md">
  <ArrowRight size={20} strokeWidth={1.5} />
</IconCircle>

// V dark karte
<IconCircle variant="ghost" size="lg">
  <ArrowRight size={24} strokeWidth={1.5} />
</IconCircle>`}
        </pre>
      </div>
      <div className="space-y-2 font-text text-sm text-text-body">
        <p>
          <span className="text-text-heading font-medium">Veľkosť:</span> 16px v buttonoch, 20px standalone, 24px v headingoch
        </p>
        <p>
          <span className="text-text-heading font-medium">Stroke:</span> 1.5 (default pre celý design system)
        </p>
        <p>
          <span className="text-text-heading font-medium">Farba:</span> dedí cez currentColor z parent elementu
        </p>
      </div>
    </div>
  ),
};
