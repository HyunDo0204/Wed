/*
  # TechDeals Schema

  1. New Tables
    - `categories` - Product categories (Electronics, Software, etc.)
    - `products` - Individual products with specs and pricing
    - `retailers` - Where products can be purchased
    - `product_retailers` - Junction table linking products to retailers

  2. Security
    - Enable RLS on all tables
    - Public read-only access for catalog
    - No write access from public users

  3. Data Structure
    - Categories with slug for URL routes
    - Products with comprehensive details, specs, pros/cons
    - Retailers with purchase links
    - Affiliate disclosure metadata
*/

CREATE TABLE IF NOT EXISTS categories (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  slug text UNIQUE NOT NULL,
  description text,
  icon text,
  created_at timestamptz DEFAULT now()
);

CREATE TABLE IF NOT EXISTS products (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  category_id uuid NOT NULL REFERENCES categories(id) ON DELETE CASCADE,
  name text NOT NULL,
  slug text UNIQUE NOT NULL,
  description text,
  image_url text,
  current_price numeric(10,2) NOT NULL,
  original_price numeric(10,2),
  discount_percentage integer DEFAULT 0,
  rating numeric(3,2) DEFAULT 0,
  review_count integer DEFAULT 0,
  affiliate_link text,
  affiliate_disclosure text DEFAULT 'This product link is an affiliate link',
  specs jsonb DEFAULT '{}',
  pros text[],
  cons text[],
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

CREATE TABLE IF NOT EXISTS retailers (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  url text NOT NULL,
  logo_url text,
  created_at timestamptz DEFAULT now()
);

CREATE TABLE IF NOT EXISTS product_retailers (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  product_id uuid NOT NULL REFERENCES products(id) ON DELETE CASCADE,
  retailer_id uuid NOT NULL REFERENCES retailers(id) ON DELETE CASCADE,
  price numeric(10,2) NOT NULL,
  affiliate_url text,
  in_stock boolean DEFAULT true,
  created_at timestamptz DEFAULT now(),
  UNIQUE(product_id, retailer_id)
);

ALTER TABLE categories ENABLE ROW LEVEL SECURITY;
ALTER TABLE products ENABLE ROW LEVEL SECURITY;
ALTER TABLE retailers ENABLE ROW LEVEL SECURITY;
ALTER TABLE product_retailers ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Categories are publicly readable"
  ON categories FOR SELECT
  USING (true);

CREATE POLICY "Products are publicly readable"
  ON products FOR SELECT
  USING (true);

CREATE POLICY "Retailers are publicly readable"
  ON retailers FOR SELECT
  USING (true);

CREATE POLICY "Product retailers are publicly readable"
  ON product_retailers FOR SELECT
  USING (true);

CREATE INDEX idx_products_category_id ON products(category_id);
CREATE INDEX idx_products_slug ON products(slug);
CREATE INDEX idx_categories_slug ON categories(slug);
CREATE INDEX idx_product_retailers_product_id ON product_retailers(product_id);
