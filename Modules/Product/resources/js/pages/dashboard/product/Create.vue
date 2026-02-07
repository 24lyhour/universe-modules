<script setup lang="ts">
import { Head, useForm } from '@inertiajs/vue3';
import { Button } from '@/components/ui/button';
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from '@/components/ui/card';
import { Modal } from 'momentum-modal';
import ProductForm from './components/ProductForm.vue';
import type { ProductFormData } from '../../../types';

const form = useForm<ProductFormData>({
    name: '',
    description: '',
    sku: '',
    price: 0,
    purchase_price: null,
    sale_price: null,
    stock: 0,
    low_stock_threshold: 10,
    status: 'draft',
    is_featured: false,
    pre_order: false,
    images: [],
    category_id: null,
});

const handleSubmit = () => {
    form.post('/dashboard/products', {
        onSuccess: () => {
            form.reset();
        },
    });
};
</script>

<template>
    <Modal>
        <Head title="Create Product" />

        <Card class="w-full max-w-2xl">
            <CardHeader>
                <CardTitle>Create Product</CardTitle>
                <CardDescription>Add a new product to your inventory</CardDescription>
            </CardHeader>
            <form @submit.prevent="handleSubmit">
                <CardContent>
                    <ProductForm v-model="form" mode="create" />
                </CardContent>
                <CardFooter class="flex justify-end gap-2">
                    <Button type="button" variant="outline" @click="$emit('close')">
                        Cancel
                    </Button>
                    <Button type="submit" :disabled="form.processing">
                        {{ form.processing ? 'Creating...' : 'Create Product' }}
                    </Button>
                </CardFooter>
            </form>
        </Card>
    </Modal>
</template>
