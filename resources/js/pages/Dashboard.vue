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
import { Toggle } from "@/components/ui/toggle"
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group"
import { Bold, Italic, Underline, AlignLeft, AlignCenter, AlignRight } from "lucide-vue-next"
import { ref } from "vue"

const isBold = ref(false)
const alignment = ref("left")
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
        <!-- Toggle Actions Demo -->
        <div class="rounded-xl border bg-card p-6">
          <h3 class="mb-4 text-lg font-semibold">Toggle Actions</h3>

          <div class="flex flex-wrap items-center gap-6">
            <!-- Single Toggle -->
            <div class="space-y-2">
              <p class="text-sm text-muted-foreground">Single Toggle</p>
              <Toggle v-model:pressed="isBold" aria-label="Toggle bold">
                <Bold class="h-4 w-4" />
              </Toggle>
            </div>

            <!-- Toggle Group - Text Formatting -->
            <div class="space-y-2">
              <p class="text-sm text-muted-foreground">Text Formatting</p>
              <ToggleGroup type="multiple" variant="outline">
                <ToggleGroupItem value="bold" aria-label="Toggle bold">
                  <Bold class="h-4 w-4" />
                </ToggleGroupItem>
                <ToggleGroupItem value="italic" aria-label="Toggle italic">
                  <Italic class="h-4 w-4" />
                </ToggleGroupItem>
                <ToggleGroupItem value="underline" aria-label="Toggle underline">
                  <Underline class="h-4 w-4" />
                </ToggleGroupItem>
              </ToggleGroup>
            </div>

            <!-- Toggle Group - Alignment -->
            <div class="space-y-2">
              <p class="text-sm text-muted-foreground">Alignment</p>
              <ToggleGroup v-model="alignment" type="single" variant="outline">
                <ToggleGroupItem value="left" aria-label="Align left">
                  <AlignLeft class="h-4 w-4" />
                </ToggleGroupItem>
                <ToggleGroupItem value="center" aria-label="Align center">
                  <AlignCenter class="h-4 w-4" />
                </ToggleGroupItem>
                <ToggleGroupItem value="right" aria-label="Align right">
                  <AlignRight class="h-4 w-4" />
                </ToggleGroupItem>
              </ToggleGroup>
            </div>
          </div>

          <!-- Status Display -->
          <div class="mt-4 rounded-md bg-muted p-3 text-sm">
            <p><strong>Bold:</strong> {{ isBold ? 'On' : 'Off' }}</p>
            <p><strong>Alignment:</strong> {{ alignment || 'None' }}</p>
          </div>
        </div>

        <div class="grid auto-rows-min gap-4 md:grid-cols-3">
          <div class="bg-muted/50 aspect-video rounded-xl" />
          <div class="bg-muted/50 aspect-video rounded-xl" />
          <div class="bg-muted/50 aspect-video rounded-xl" />
        </div>
        <div class="bg-muted/50 min-h-screen flex-1 rounded-xl md:min-h-min" />
      </div>
    </SidebarInset>
  </SidebarProvider>
</template>
