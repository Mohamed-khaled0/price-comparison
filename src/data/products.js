// src/data/products.js
const products = [
    // Electronics
    {
      id: '1',
      name: 'Wireless Headphones',
      description: 'High-quality wireless headphones with noise cancellation.',
      image:
        'https://images.unsplash.com/photo-1511376777868-611b54f68947?auto=format&fit=crop&w=800&q=60',
      lowestPrice: 99.99,
      category: 'Electronics',
      offers: [
        { retailer: 'Amazon', price: 99.99, url: 'https://amazon.com/product1' },
        { retailer: 'Noon', price: 105.49, url: 'https://noon.com/product1' },
      ],
    },
    {
      id: '2',
      name: 'Smartphone',
      description: 'Latest smartphone with high-end specs.',
      image:
        'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=800&q=60',
      lowestPrice: 499.99,
      category: 'Electronics',
      offers: [
        { retailer: 'Amazon', price: 499.99, url: 'https://amazon.com/product2' },
        { retailer: 'Noon', price: 450.0, url: 'https://noon.com/product2' },
      ],
    },
    {
      id: '3',
      name: '4K Smart TV',
      description: 'Experience high-definition video quality with our 4K smart TV.',
      image:
        'https://images.unsplash.com/photo-1588776814546-34d4ba0c070d?auto=format&fit=crop&w=800&q=60',
      lowestPrice: 899.99,
      category: 'Electronics',
      offers: [
        { retailer: 'Amazon', price: 899.99, url: 'https://amazon.com/product3' },
        { retailer: 'Noon', price: 875.0, url: 'https://noon.com/product3' },
      ],
    },
    {
      id: '4',
      name: 'Bluetooth Speaker',
      description: 'Portable Bluetooth speaker with waterproof design.',
      image:
        'https://images.unsplash.com/photo-1562599932-e66a7300d666?auto=format&fit=crop&w=800&q=60',
      lowestPrice: 39.99,
      category: 'Electronics',
      offers: [
        { retailer: 'Amazon', price: 39.99, url: 'https://amazon.com/product4' },
        { retailer: 'Noon', price: 45.0, url: 'https://noon.com/product4' },
      ],
    },
    {
      id: '5',
      name: 'Smart Watch',
      description: 'Wearable smart watch with fitness tracking features.',
      image:
        'https://images.unsplash.com/photo-1517430816045-df4b7de11d1c?auto=format&fit=crop&w=800&q=60',
      lowestPrice: 149.99,
      category: 'Electronics',
      offers: [
        { retailer: 'Amazon', price: 149.99, url: 'https://amazon.com/product5' },
        { retailer: 'Noon', price: 145.0, url: 'https://noon.com/product5' },
      ],
    },
  
    // Home Appliances
    {
      id: '6',
      name: 'Coffee Maker',
      description: 'Automatic coffee maker with built-in grinder.',
      image:
        'https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=800&q=60',
      lowestPrice: 79.99,
      category: 'Home Appliances',
      offers: [
        { retailer: 'Amazon', price: 79.99, url: 'https://amazon.com/product6' },
        { retailer: 'Noon', price: 85.0, url: 'https://noon.com/product6' },
      ],
    },
    {
      id: '7',
      name: 'Air Fryer',
      description: 'Healthy cooking with less oil. The perfect kitchen gadget.',
      image:
        'https://images.unsplash.com/photo-1606813909407-7b6b542e8c72?auto=format&fit=crop&w=800&q=60',
      lowestPrice: 99.99,
      category: 'Home Appliances',
      offers: [
        { retailer: 'Amazon', price: 99.99, url: 'https://amazon.com/product7' },
        { retailer: 'Noon', price: 110.0, url: 'https://noon.com/product7' },
      ],
    },
    {
      id: '8',
      name: 'Vacuum Cleaner',
      description: 'Cordless vacuum cleaner with powerful suction.',
      image:
        'https://images.unsplash.com/photo-1587560699334-810f56c3b1cd?auto=format&fit=crop&w=800&q=60',
      lowestPrice: 149.99,
      category: 'Home Appliances',
      offers: [
        { retailer: 'Amazon', price: 149.99, url: 'https://amazon.com/product8' },
        { retailer: 'Noon', price: 145.0, url: 'https://noon.com/product8' },
      ],
    },
    {
      id: '9',
      name: 'Electric Kettle',
      description: 'Quick boiling electric kettle with temperature control.',
      image:
        'https://images.unsplash.com/photo-1599785209707-7a91c6fa72d4?auto=format&fit=crop&w=800&q=60',
      lowestPrice: 29.99,
      category: 'Home Appliances',
      offers: [
        { retailer: 'Amazon', price: 29.99, url: 'https://amazon.com/product9' },
        { retailer: 'Noon', price: 35.0, url: 'https://noon.com/product9' },
      ],
    },
    {
      id: '10',
      name: 'Blender',
      description: 'Heavy-duty blender for smoothies and shakes.',
      image:
        'https://images.unsplash.com/photo-1611078488064-4cda55b72aab?auto=format&fit=crop&w=800&q=60',
      lowestPrice: 49.99,
      category: 'Home Appliances',
      offers: [
        { retailer: 'Amazon', price: 49.99, url: 'https://amazon.com/product10' },
        { retailer: 'Noon', price: 55.0, url: 'https://noon.com/product10' },
      ],
    },
  
    // Fashion
    {
      id: '11',
      name: "Men's T-Shirt",
      description: 'Comfortable cotton t-shirt with a modern design.',
      image:
        'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=800&q=60',
      lowestPrice: 19.99,
      category: 'Fashion',
      offers: [
        { retailer: 'Amazon', price: 19.99, url: 'https://amazon.com/product11' },
        { retailer: 'Noon', price: 22.0, url: 'https://noon.com/product11' },
      ],
    },
    {
      id: '12',
      name: "Women's Dress",
      description: 'Elegant summer dress with floral print.',
      image:
        'https://images.unsplash.com/photo-1521334884684-d80222895322?auto=format&fit=crop&w=800&q=60',
      lowestPrice: 49.99,
      category: 'Fashion',
      offers: [
        { retailer: 'Amazon', price: 49.99, url: 'https://amazon.com/product12' },
        { retailer: 'Noon', price: 45.0, url: 'https://noon.com/product12' },
      ],
    },
    {
      id: '13',
      name: 'Leather Jacket',
      description: "Stylish men's leather jacket for colder weather.",
      image:
        'https://images.unsplash.com/photo-1524253482453-3fed8d2fe12b?auto=format&fit=crop&w=800&q=60',
      lowestPrice: 199.99,
      category: 'Fashion',
      offers: [
        { retailer: 'Amazon', price: 199.99, url: 'https://amazon.com/product13' },
        { retailer: 'Noon', price: 205.0, url: 'https://noon.com/product13' },
      ],
    },
    {
      id: '14',
      name: 'Running Shoes',
      description: 'Lightweight shoes for running and everyday wear.',
      image:
        'https://images.unsplash.com/photo-1549298916-b41d501d3772?auto=format&fit=crop&w=800&q=60',
      lowestPrice: 59.99,
      category: 'Fashion',
      offers: [
        { retailer: 'Amazon', price: 59.99, url: 'https://amazon.com/product14' },
        { retailer: 'Noon', price: 65.0, url: 'https://noon.com/product14' },
      ],
    },
    {
      id: '15',
      name: 'Sunglasses',
      description: 'Stylish sunglasses with UV protection.',
      image:
        'https://images.unsplash.com/photo-1529148482759-b35f25f59b17?auto=format&fit=crop&w=800&q=60',
      lowestPrice: 29.99,
      category: 'Fashion',
      offers: [
        { retailer: 'Amazon', price: 29.99, url: 'https://amazon.com/product15' },
        { retailer: 'Noon', price: 35.0, url: 'https://noon.com/product15' },
      ],
    },
  
    // Health & Beauty
    {
      id: '16',
      name: 'Face Serum',
      description: 'Anti-aging serum with vitamin C.',
      image:
        'https://images.unsplash.com/photo-1522337660859-02fbefca4702?auto=format&fit=crop&w=800&q=60',
      lowestPrice: 29.99,
      category: 'Health & Beauty',
      offers: [
        { retailer: 'Amazon', price: 29.99, url: 'https://amazon.com/product16' },
        { retailer: 'Noon', price: 33.0, url: 'https://noon.com/product16' },
      ],
    },
    {
      id: '17',
      name: 'Shampoo',
      description: 'Natural ingredients shampoo for hair growth.',
      image:
        'https://images.unsplash.com/photo-1608899178432-fc53aefb4f19?auto=format&fit=crop&w=800&q=60',
      lowestPrice: 15.99,
      category: 'Health & Beauty',
      offers: [
        { retailer: 'Amazon', price: 15.99, url: 'https://amazon.com/product17' },
        { retailer: 'Noon', price: 18.0, url: 'https://noon.com/product17' },
      ],
    },
    {
      id: '18',
      name: 'Electric Toothbrush',
      description: 'High-tech electric toothbrush for a cleaner smile.',
      image:
        'https://images.unsplash.com/photo-1585386959984-a415522f0dff?auto=format&fit=crop&w=800&q=60',
      lowestPrice: 39.99,
      category: 'Health & Beauty',
      offers: [
        { retailer: 'Amazon', price: 39.99, url: 'https://amazon.com/product18' },
        { retailer: 'Noon', price: 45.0, url: 'https://noon.com/product18' },
      ],
    },
    {
      id: '19',
      name: 'Moisturizing Cream',
      description: 'Deep moisturizing cream for dry skin.',
      image:
        'https://images.unsplash.com/photo-1604870288400-d7a61c0db377?auto=format&fit=crop&w=800&q=60',
      lowestPrice: 12.99,
      category: 'Health & Beauty',
      offers: [
        { retailer: 'Amazon', price: 12.99, url: 'https://amazon.com/product19' },
        { retailer: 'Noon', price: 15.0, url: 'https://noon.com/product19' },
      ],
    },
    {
      id: '20',
      name: 'Hair Dryer',
      description: 'High-speed hair dryer with multiple settings.',
      image:
        'https://images.unsplash.com/photo-1611078488064-4cda55b72aab?auto=format&fit=crop&w=800&q=60',
      lowestPrice: 49.99,
      category: 'Health & Beauty',
      offers: [
        { retailer: 'Amazon', price: 49.99, url: 'https://amazon.com/product20' },
        { retailer: 'Noon', price: 55.0, url: 'https://noon.com/product20' },
      ],
    },
  ];
  
  export default products;