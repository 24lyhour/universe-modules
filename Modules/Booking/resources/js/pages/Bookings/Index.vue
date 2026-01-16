<template>
    <Card>
        CardDetails
    </Card>
    <VCard>
        <VCardMedia src="src" height="200px">
        </VCardMedia>
        <VCardTitle primary-title>
            <div>
                <h3 class="headline mb-0">headline</h3>
                <div>description</div>
            </div>
        </VCardTitle>
        <VCardActions>
            <VBtn flat color="primary">text</VBtn>
            <VBtn flat color="primary">text</VBtn>
        </VCardActions>
    </VCard>

</template>

<script setup lang="ts">
import { Card } from '@/components/ui/card'

</script>