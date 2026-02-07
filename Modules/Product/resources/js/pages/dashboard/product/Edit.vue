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
import type { ProductFormData, ProductEditProps } from '../../../types';

const props = defineProps<ProductEditProps>();

const form = useForm<ProductFormData>({
    name: props.product.name,
    description: props.product.description || '',
    sku: props.product.sku || '',
    price: props.product.price,
    purchase_price: props.product.purchase_price,
    sale_price: props.product.sale_price,
    stock: props.product.stock,
    low_stock_threshold: props.product.low_stock_threshold,
    status: props.product.status,
    is_featured: props.product.is_featured,
    pre_order: props.product.pre_order,
    images: props.product.images || [],
    category_id: props.product.category_id,
});

const handleSubmit = () => {
    form.put(`/dashboard/products/${props.product.id}`);
};
</script>

<template>
    <Modal>
        <Head :title="`Edit ${product.name}`" />

        <Card class="w-full max-w-2xl">
            <CardHeader>
                <CardTitle>Edit Product</CardTitle>
                <CardDescription>Update product information</CardDescription>
            </CardHeader>
            <form @submit.prevent="handleSubmit">
                <CardContent>
                    <ProductForm v-model="form" mode="edit" />
                </CardContent>
                <CardFooter class="flex justify-end gap-2">
                    <Button type="button" variant="outline" @click="$emit('close')">
                        Cancel
                    </Button>
                    <Button type="submit" :disabled="form.processing">
                        {{ form.processing ? 'Saving...' : 'Save Changes' }}
                    </Button>
                </CardFooter>
            </form>
        </Card>
    </Modal>
</template>
