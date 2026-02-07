// Product Module Types

export interface Product {
    id: number;
    uuid: string;
    name: string;
    slug: string;
    description: string | null;
    sku: string | null;
    price: number;
    purchase_price: number | null;
    sale_price: number | null;
    effective_price: number;
    discount_percentage: number | null;
    is_on_sale: boolean;
    stock: number;
    low_stock_threshold: number;
    is_in_stock: boolean;
    is_low_stock: boolean;
    status: 'active' | 'inactive' | 'draft' | 'out_of_stock';
    is_featured: boolean;
    pre_order: boolean;
    images: string[];
    category_id: number | null;
    category: ProductCategory | null;
    created_by: number | null;
    updated_by: number | null;
    created_at: string;
    updated_at: string;
}

export interface ProductCategory {
    id: number;
    name: string;
}

export interface ProductStats {
    total: number;
    active: number;
    inactive: number;
    draft: number;
    out_of_stock: number;
    low_stock: number;
    featured: number;
}

export interface PaginationMeta {
    current_page: number;
    last_page: number;
    per_page: number;
    total: number;
    from: number | null;
    to: number | null;
    path?: string;
}

export interface PaginationLinks {
    first: string | null;
    last: string | null;
    prev: string | null;
    next: string | null;
}

export interface PaginatedResponse<T> {
    data: T[];
    meta: PaginationMeta;
    links?: PaginationLinks;
}

export interface ProductFilters {
    status?: string;
    search?: string;
    category_id?: number;
    is_featured?: boolean;
    in_stock?: boolean;
    low_stock?: boolean;
    min_price?: number;
    max_price?: number;
}

// Form Data Types
export interface ProductFormData {
    name: string;
    description: string;
    sku: string;
    price: number;
    purchase_price: number | null;
    sale_price: number | null;
    stock: number;
    low_stock_threshold: number;
    status: 'active' | 'inactive' | 'draft' | 'out_of_stock';
    is_featured: boolean;
    pre_order: boolean;
    images: string[];
    category_id: number | null;
}

// Page Props Types
export interface ProductIndexProps {
    products: PaginatedResponse<Product>;
    filters: ProductFilters;
    stats: ProductStats;
}

export interface ProductShowProps {
    product: Product;
}

export interface ProductCreateProps {
    categories?: ProductCategory[];
}

export interface ProductEditProps {
    product: Product;
    categories?: ProductCategory[];
}
