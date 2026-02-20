/*
  # Seed TechDeals Data

  1. Categories - Electronics, Software, Accessories
  2. Sample Products - 6 featured deals
  3. Retailers - Amazon, Best Buy, Newegg
  4. Product Retailer Links - Cross-reference products and retailers
*/

INSERT INTO categories (name, slug, description, icon) VALUES
  ('Laptops', 'laptops', 'High-performance laptops and notebooks', 'Laptop'),
  ('Smartphones', 'smartphones', 'Latest smartphones and mobile devices', 'Smartphone'),
  ('Tablets', 'tablets', 'Tablets and iPad alternatives', 'Tablet'),
  ('Accessories', 'accessories', 'Tech accessories and peripherals', 'Package'),
  ('Gaming', 'gaming', 'Gaming devices and consoles', 'Gamepad2');

INSERT INTO retailers (name, url, logo_url) VALUES
  ('Amazon', 'https://amazon.com', 'https://images.pexels.com/photos/3770671/pexels-photo-3770671.jpeg'),
  ('Best Buy', 'https://bestbuy.com', 'https://images.pexels.com/photos/3808517/pexels-photo-3808517.jpeg'),
  ('Newegg', 'https://newegg.com', 'https://images.pexels.com/photos/5632401/pexels-photo-5632401.jpeg');

INSERT INTO products (
  category_id, name, slug, description, image_url, current_price, original_price, 
  discount_percentage, rating, review_count, specs, pros, cons
) VALUES
  (
    (SELECT id FROM categories WHERE slug = 'laptops'),
    'MacBook Pro 14"',
    'macbook-pro-14',
    'High-performance laptop with M3 Pro chip',
    'https://images.pexels.com/photos/18105/pexels-photo.jpg',
    1999.99,
    2499.99,
    20,
    4.8,
    1205,
    '{"processor": "Apple M3 Pro", "ram": "18GB", "storage": "512GB SSD", "display": "14-inch Liquid Retina XDR", "battery": "17 hours"}',
    ARRAY['Excellent performance', 'Stunning display', 'Long battery life', 'Premium build quality'],
    ARRAY['Expensive', 'Limited ports', 'Not upgradeable']
  ),
  (
    (SELECT id FROM categories WHERE slug = 'smartphones'),
    'iPhone 15 Pro Max',
    'iphone-15-pro-max',
    'Latest flagship iPhone with advanced camera system',
    'https://images.pexels.com/photos/699122/pexels-photo-699122.jpeg',
    1199.99,
    1299.99,
    8,
    4.9,
    2840,
    '{"processor": "A17 Pro", "ram": "8GB", "storage": "256GB", "display": "6.7-inch Super Retina XDR", "camera": "48MP main + 12MP ultra-wide"}',
    ARRAY['Exceptional camera', 'Fast performance', 'Great battery life', 'Durable design'],
    ARRAY['Expensive', 'No charger included', 'Limited customization']
  ),
  (
    (SELECT id FROM categories WHERE slug = 'laptops'),
    'Dell XPS 15',
    'dell-xps-15',
    'Premium Windows laptop with Intel Core i7',
    'https://images.pexels.com/photos/7974/pexels-photo.jpg',
    1299.99,
    1599.99,
    19,
    4.7,
    856,
    '{"processor": "Intel Core i7-13700H", "ram": "16GB DDR5", "storage": "512GB SSD", "display": "15.6-inch OLED", "gpu": "NVIDIA RTX 4060"}',
    ARRAY['Beautiful OLED display', 'Powerful performance', 'Great for creators', 'Slim design'],
    ARRAY['Runs hot under load', 'Premium pricing', 'Trackpad could be larger']
  ),
  (
    (SELECT id FROM categories WHERE slug = 'tablets'),
    'iPad Air',
    'ipad-air',
    'Powerful mid-range tablet with M1 chip',
    'https://images.pexels.com/photos/788946/pexels-photo-788946.jpeg',
    599.99,
    749.99,
    20,
    4.6,
    1342,
    '{"processor": "Apple M1", "ram": "8GB", "storage": "256GB", "display": "10.9-inch Liquid Retina", "battery": "10 hours"}',
    ARRAY['Great performance', 'Versatile for work and play', 'Good value', 'Excellent display'],
    ARRAY['No keyboard included', 'Smaller than Pro models', 'Limited RAM options']
  ),
  (
    (SELECT id FROM categories WHERE slug = 'gaming'),
    'PlayStation 5',
    'playstation-5',
    'Next-gen gaming console with stunning graphics',
    'https://images.pexels.com/photos/3587620/pexels-photo-3587620.jpeg',
    499.99,
    599.99,
    17,
    4.8,
    3256,
    '{"cpu": "8-core AMD Zen 2", "gpu": "10.28 TFLOPS RDNA 2", "storage": "825GB SSD", "output": "4K@120Hz", "raytracing": "Yes"}',
    ARRAY['Excellent game library', 'Fast loading times', 'Great graphics', 'Reliable performance'],
    ARRAY['Limited backwards compatibility', 'High power consumption', 'Controller drift issues']
  ),
  (
    (SELECT id FROM categories WHERE slug = 'accessories'),
    'Apple AirPods Pro',
    'airpods-pro',
    'Premium wireless earbuds with active noise cancellation',
    'https://images.pexels.com/photos/3587627/pexels-photo-3587627.jpeg',
    249.99,
    349.99,
    29,
    4.7,
    2104,
    '{"driver": "6mm dynamic driver", "anc": "Active Noise Cancellation", "battery": "6 hours playback", "case": "30 hours with case", "water": "IPX4"}',
    ARRAY['Excellent noise cancellation', 'Great sound quality', 'Seamless Apple integration', 'Comfortable fit'],
    ARRAY['Expensive', 'Non-replaceable batteries', 'Limited third-party app support']
  );
