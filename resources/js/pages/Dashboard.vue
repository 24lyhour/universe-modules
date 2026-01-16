<script lang="ts">
export const description
  = "A sidebar that collapses to icons."
export const iframeHeight = "800px"
export const containerClass = "w-full h-full"
</script>

<script setup lang="ts">
import AppSidebar from "@/components/AppSidebar.vue"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { Separator } from "@/components/ui/separator"
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar"
import { ThemeToggle } from "@/components/ui/theme"
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from "@/components/ui/chart"
import { VisXYContainer, VisArea, VisAxis, VisLine, VisGroupedBar, VisSingleContainer, VisDonut } from "@unovis/vue"
import { TrendingUp, TrendingDown } from "lucide-vue-next"
import { computed, onMounted, ref } from "vue"

// Chart colors - resolved from CSS variables at runtime
const chartColors = ref({
  chart1: "oklch(0.871 0.15 154.449)",
  chart2: "oklch(0.723 0.219 149.579)",
  chart3: "oklch(0.627 0.194 149.214)",
  chart4: "oklch(0.527 0.154 150.069)",
  chart5: "oklch(0.448 0.119 151.328)",
})

onMounted(() => {
  const styles = getComputedStyle(document.documentElement)
  chartColors.value = {
    chart1: styles.getPropertyValue("--chart-1").trim() || chartColors.value.chart1,
    chart2: styles.getPropertyValue("--chart-2").trim() || chartColors.value.chart2,
    chart3: styles.getPropertyValue("--chart-3").trim() || chartColors.value.chart3,
    chart4: styles.getPropertyValue("--chart-4").trim() || chartColors.value.chart4,
    chart5: styles.getPropertyValue("--chart-5").trim() || chartColors.value.chart5,
  }
})

// Area/Line/Bar Chart Data
const chartData = [
  { month: "January", desktop: 186, mobile: 80 },
  { month: "February", desktop: 305, mobile: 200 },
  { month: "March", desktop: 237, mobile: 120 },
  { month: "April", desktop: 73, mobile: 190 },
  { month: "May", desktop: 209, mobile: 130 },
  { month: "June", desktop: 214, mobile: 140 },
]

type DataRecord = typeof chartData[number]

const chartConfig = computed(() => ({
  desktop: {
    label: "Desktop",
    color: chartColors.value.chart1,
  },
  mobile: {
    label: "Mobile",
    color: chartColors.value.chart2,
  },
}) satisfies ChartConfig)

const x = (_d: DataRecord, i: number) => i
const y = [
  (d: DataRecord) => d.desktop,
  (d: DataRecord) => d.mobile,
]

const xTicks = (i: number) => chartData[i]?.month?.slice(0, 3) ?? ""

// Donut Chart Data
const donutData = computed(() => [
  { browser: "Chrome", visitors: 275, color: chartColors.value.chart1 },
  { browser: "Safari", visitors: 200, color: chartColors.value.chart2 },
  { browser: "Firefox", visitors: 187, color: chartColors.value.chart3 },
  { browser: "Edge", visitors: 173, color: chartColors.value.chart4 },
  { browser: "Other", visitors: 90, color: chartColors.value.chart5 },
])

type DonutRecord = { browser: string; visitors: number; color: string }

const donutConfig = computed(() => ({
  visitors: {
    label: "Visitors",
  },
  chrome: {
    label: "Chrome",
    color: chartColors.value.chart1,
  },
  safari: {
    label: "Safari",
    color: chartColors.value.chart2,
  },
  firefox: {
    label: "Firefox",
    color: chartColors.value.chart3,
  },
  edge: {
    label: "Edge",
    color: chartColors.value.chart4,
  },
  other: {
    label: "Other",
    color: chartColors.value.chart5,
  },
}) satisfies ChartConfig)

const donutValue = (d: DonutRecord) => d.visitors
const donutColor = (d: DonutRecord) => d.color
const totalVisitors = computed(() => donutData.value.reduce((acc, curr) => acc + curr.visitors, 0))
</script>

<template>
  <SidebarProvider>
    <AppSidebar />
    <SidebarInset>
      <header class="flex h-16 shrink-0 items-center justify-between gap-2 border-b px-4 transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-12">
        <div class="flex items-center gap-2">
          <SidebarTrigger class="-ml-1" />
          <Separator
            orientation="vertical"
            class="mr-2 data-[orientation=vertical]:h-4"
          />
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem class="hidden md:block">
                <BreadcrumbLink href="#">
                  Building Your Application
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator class="hidden md:block" />
              <BreadcrumbItem>
                <BreadcrumbPage>Data Fetching</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
        <div class="flex items-center gap-2">
          <ThemeToggle />
        </div>
      </header>
      <div class="flex flex-1 flex-col gap-4 p-4 pt-4">
        <!-- Area Chart -->
        <div class="rounded-xl border bg-card">
          <div class="flex flex-col space-y-1.5 p-6">
            <h3 class="text-2xl font-semibold leading-none tracking-tight">Area Chart - Stacked</h3>
            <p class="text-sm text-muted-foreground">Showing total visitors for the last 6 months</p>
          </div>
          <div class="p-6 pt-0">
            <ChartContainer :config="chartConfig" class="h-[300px] w-full">
              <VisXYContainer :data="chartData" :margin="{ top: 10, right: 10, bottom: 30, left: 40 }">
                <VisArea
                  :x="x"
                  :y="y"
                  :color="[chartColors.chart1, chartColors.chart2]"
                  :opacity="0.4"
                  :curve-type="'linear'"
                />
                <VisLine
                  :x="x"
                  :y="y"
                  :color="[chartColors.chart1, chartColors.chart2]"
                />
                <VisAxis type="x" :tick-format="xTicks" :grid-line="false" />
                <VisAxis type="y" :grid-line="true" />
                <ChartTooltip>
                  <ChartTooltipContent />
                </ChartTooltip>
              </VisXYContainer>
            </ChartContainer>
          </div>
          <div class="flex items-center p-6 pt-0">
            <div class="flex w-full items-start gap-2 text-sm">
              <div class="grid gap-2">
                <div class="flex items-center gap-2 font-medium leading-none">
                  Trending up by 5.2% this month <TrendingUp class="h-4 w-4" />
                </div>
                <div class="flex items-center gap-2 leading-none text-muted-foreground">
                  January - June 2024
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="grid auto-rows-min gap-4 md:grid-cols-2">
          <!-- Bar Chart -->
          <div class="rounded-xl border bg-card">
            <div class="flex flex-col space-y-1.5 p-6">
              <h3 class="text-2xl font-semibold leading-none tracking-tight">Bar Chart</h3>
              <p class="text-sm text-muted-foreground">Desktop vs Mobile visitors</p>
            </div>
            <div class="p-6 pt-0">
              <ChartContainer :config="chartConfig" class="h-[250px] w-full">
                <VisXYContainer :data="chartData" :margin="{ top: 10, right: 10, bottom: 30, left: 40 }">
                  <VisGroupedBar
                    :x="x"
                    :y="y"
                    :color="[chartColors.chart1, chartColors.chart2]"
                    :rounded-corners="4"
                    :bar-padding="0.1"
                  />
                  <VisAxis type="x" :tick-format="xTicks" :grid-line="false" />
                  <VisAxis type="y" :grid-line="true" />
                  <ChartTooltip>
                    <ChartTooltipContent />
                  </ChartTooltip>
                </VisXYContainer>
              </ChartContainer>
            </div>
            <div class="flex items-center p-6 pt-0">
              <div class="flex w-full items-start gap-2 text-sm">
                <div class="grid gap-2">
                  <div class="flex items-center gap-2 font-medium leading-none">
                    Trending down by 2.1% this month <TrendingDown class="h-4 w-4" />
                  </div>
                  <div class="flex items-center gap-2 leading-none text-muted-foreground">
                    January - June 2024
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Donut Chart -->
          <div class="rounded-xl border bg-card">
            <div class="flex flex-col space-y-1.5 p-6">
              <h3 class="text-2xl font-semibold leading-none tracking-tight">Pie Chart - Donut</h3>
              <p class="text-sm text-muted-foreground">Browser usage statistics</p>
            </div>
            <div class="p-6 pt-0">
              <ChartContainer :config="donutConfig" class="h-[250px] w-full">
                <VisSingleContainer :data="donutData">
                  <VisDonut
                    :value="donutValue"
                    :color="donutColor"
                    :arc-width="60"
                    :pad-angle="0.01"
                    :corner-radius="4"
                    central-label="Visitors"
                    :central-sub-label="totalVisitors.toLocaleString()"
                  />
                </VisSingleContainer>
              </ChartContainer>
            </div>
            <div class="flex items-center p-6 pt-0">
              <div class="flex w-full items-start gap-2 text-sm">
                <div class="grid gap-2">
                  <div class="flex items-center gap-2 font-medium leading-none">
                    Trending up by 5.2% this month <TrendingUp class="h-4 w-4" />
                  </div>
                  <div class="flex items-center gap-2 leading-none text-muted-foreground">
                    Showing total visitors by browser
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SidebarInset>
  </SidebarProvider>
</template>
