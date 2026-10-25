
import { useState } from 'react'
import './App.css'

const initialProducts = [
 
  {
    id: 1,
    name: 'Smart Watch',
    category: 'Wearables',
    price: 199.99,
    quantity: 25,
    rating: 4.7,
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500',
    description: 'A stylish smartwatch for checking time and tracking your daily activities.',
    specification: 'Digital display, activity tracking, adjustable strap',
  },
  {
    id: 2,
    name: 'Bicycle Helmet',
    category: 'Wearables',
    price: 499.99,
    quantity: 25,
    rating: 4.7,
    image: 'https://media.istockphoto.com/id/1422853369/photo/a-protective-helmet-for-a-cyclist.jpg?s=612x612&w=0&k=20&c=7sqtGGt4lvHL8gDmamwjL9Cc-Oe2VWrZ_7RFNNmf908=',
    description: 'A lightweight bicycle helmet designed to help protect the head while cycling. Its sporty design provides comfort and ventilation for everyday rides.',
    specification: 'Durable helmet shell, multiple ventilation holes, adjustable fit, lightweight design, blue and silver color combination, suitable for cycling.',
  },
  {
    id: 3,
    name: 'Travel Backpack',
    category: 'Bags',
    price: 389,
    quantity: 18,
    rating: 4.6,
    image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500',
    description: 'A practical backpack for school, work, and short trips.',
    specification: 'Multiple compartments, lightweight, durable fabric',
  },
   {
    id: 6,
    name: 'Elegant Beige Handbag',
    category: 'Bags',
    price: 899,
    quantity: 18,
    rating: 4.6,
    image: 'https://images.unsplash.com/photo-1606522754091-a3bbf9ad4cb3?q=80&w=842&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D',
    description: 'A stylish beige handbag with a sleek, elegant design, perfect for everyday use, work, or special occasions. Its compact shape and secure closure make it a fashionable and practical accessory.',
    specification: 'Fashion Accessories, Beige, Leather,Gold-tone twist lock,Compact design, elegant finish, suitable for daily use and formal occasions',
  },
   {
    id: 7,
    name: 'Act+Acre Restorative Hair Mask',
    category: 'Beauty',
    price: 279,
    quantity: 35,
    rating: 4.8,
    image:'https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?auto=format&fit=crop&w=800&q=80,',
    description: 'A restorative hair mask designed to nourish and condition dry, damaged hair. It helps improve hair softness, smoothness, and manageability, leaving hair feeling healthier and more refreshed.',
    specification: ' Hair treatment mask, designed for hair conditioning and nourishment, helps improve softness and smoothness, suitable for a hair care routine',
  },
  {
    id: 7,
    name: 'Azarina Beaty Set',
    category: 'Beauty',
    price: 249,
    quantity: 30,
    rating: 4.8,
    image:'https://images.unsplash.com/photo-1642155973299-75cb601667f1?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D',
    description: 'A skincare set designed to help cleanse, moisturize, and protect the skin for a fresh, healthy-looking glow.',
    specification: 'Skincare product set, moisturizing formula, SPF sun protection, lightweight application, suitable for daily skincare routines.',
  },
   {
    id: 8,
    name: 'Gaming Mouse',
    category: 'Electronics',
    price: 799,
    quantity: 20,
    rating: 4.7,
    image: 'https://images.unsplash.com/photo-1527814050087-3793815479db?w=500',
    description: 'A responsive gaming mouse designed for comfortable gaming and everyday computer use.',
    specification: 'USB connection, ergonomic design, adjustable sensitivity',
  },
  {
    id: 9,
    name: 'Mechanical Keyboard',
    category: 'Electronics',
    price: 1899,
    quantity: 15,
    rating: 4.8,
    image: 'https://images.unsplash.com/photo-1595225476474-87563907a212?w=500',
    description: 'A mechanical keyboard with a comfortable layout for typing, studying, and gaming.',
    specification: 'Mechanical keys, USB connection, durable key switches',
  },
   {
    id: 10,
    name: 'Portable Bluetooth Speaker',
    category: 'Electronics',
    price: 1299,
    quantity: 22,
    rating: 4.6,
    image: 'https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=500',
    description: 'A portable speaker for enjoying music at home or while traveling.',
    specification: 'Bluetooth connectivity, rechargeable battery, compact design',
  },
  {
    id: 11,
    name: 'Running Shoes',
    category: 'Fashion',
    price: 2499,
    quantity: 16,
    rating: 4.7,
    image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500',
    description: 'Comfortable athletic shoes suitable for walking, running, and daily activities.',
    specification: 'Lightweight design, cushioned sole, lace-up closure',
  },
   {
    id: 12,
    name: 'Classic Sunglasses',
    category: 'Fashion',
    price: 599,
    quantity: 28,
    rating: 4.5,
    image: 'https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=500',
    description: 'Classic sunglasses with a stylish frame for everyday outdoor wear.',
    specification: 'Lightweight frame, tinted lenses, unisex design',
  },
]

const money = (amount) =>
  new Intl.NumberFormat('en-PH', {
    style: 'currency',
    currency: 'PHP',
  }).format(amount)

function App() {
  const [products, setProducts] = useState(initialProducts)
  const [quantities, setQuantities] = useState({ 1: 1, 2: 1, 3: 1 })
  const [cart, setCart] = useState({})
  const [category, setCategory] = useState('All Categories')
  const [page, setPage] = useState('Home')
  const [selectedProduct, setSelectedProduct] = useState(null)
  const [showForm, setShowForm] = useState(false)
  const [message, setMessage] = useState('')

  const [form, setForm] = useState({
    image: '',
    name: '',
    category: '',
    description: '',
    specification: '',
    rating: '',
    price: '',
    quantity: '',
  })

  const categories = [
    'All Categories',
    ...new Set(products.map((product) => product.category)),
  ]

  const filteredProducts = products.filter(
    (product) =>
      category === 'All Categories' || product.category === category,
  )

  const cartItems = products.filter((product) => cart[product.id] > 0)

  const total = cartItems.reduce(
    (sum, product) => sum + product.price * cart[product.id],
    0,
  )

  const changeQuantity = (id, amount) => {
    const product = products.find((item) => item.id === id)
    if (!product) return

    setQuantities((previous) => {
      const current = previous[id] || 1
      const next = Math.max(1, Math.min(product.quantity, current + amount))
      return { ...previous, [id]: next }
    })
  }

  const addToCart = (product) => {
    const amount = quantities[product.id] || 1
    const current = cart[product.id] || 0

    if (current + amount > product.quantity) {
      setMessage(`Only ${product.quantity} unit(s) of ${product.name} are in stock.`)
      return
    }

    setCart((previous) => ({
      ...previous,
      [product.id]: current + amount,
    }))
    setMessage(`${product.name} added to cart!`)
  }

  const changeCartQuantity = (id, amount) => {
    const product = products.find((item) => item.id === id)
    const current = cart[id] || 0
    const next = current + amount

    if (next <= 0) {
      setCart((previous) => ({ ...previous, [id]: 0 }))
    } else if (next <= product.quantity) {
      setCart((previous) => ({ ...previous, [id]: next }))
    } else {
      setMessage(`Only ${product.quantity} unit(s) are available.`)
    }
  }

  const submitProduct = (event) => {
    event.preventDefault()

    const { image, name, category, description, specification, rating, price, quantity } = form

    if (
      !image.trim() ||
      !name.trim() ||
      !category.trim() ||
      !description.trim() ||
      !specification.trim() ||
      rating === '' ||
      price === '' ||
      quantity === ''
    ) {
      setMessage('Please fill in all fields.')
      return
    }

    if (
      !Number.isFinite(Number(rating)) ||
      Number(rating) < 1 ||
      Number(rating) > 5 ||
      !Number.isFinite(Number(price)) ||
      Number(price) <= 0 ||
      !Number.isInteger(Number(quantity)) ||
      Number(quantity) < 0
    ) {
      setMessage('Enter a rating from 1–5, a positive price, and a whole-number quantity of 0 or more.')
      return
    }

    const newProduct = {
      id: Date.now(),
      image: image.trim(),
      name: name.trim(),
      category: category.trim(),
      description: description.trim(),
      specification: specification.trim(),
      rating: Number(rating),
      price: Number(price),
      quantity: Number(quantity),
    }

    setProducts((previous) => [...previous, newProduct])
    setQuantities((previous) => ({ ...previous, [newProduct.id]: 1 }))
    setForm({
      image: '',
      name: '',
      category: '',
      description: '',
      specification: '',
      rating: '',
      price: '',
      quantity: '',
    })
    setCategory('All Categories')
    setShowForm(false)
    setPage('Products')
    setMessage('New product added successfully!')
  }

  const openDetails = (product) => {
    setSelectedProduct(product)
    setPage('Details')
  }

  return (
    <div className="app">
      <header className="navbar">
        <button className="brand" onClick={() => setPage('Home')}>
          🛍️ <span>GILLEGO PRODUCT <b>HUB</b></span>
        </button>

        <nav>
          <button className={page === 'Home' ? 'nav-active' : ''} onClick={() => setPage('Home')}>Home</button>
          <button className={page === 'Products' ? 'nav-active' : ''} onClick={() => setPage('Products')}>Products</button>
          <button className={showForm ? 'nav-active' : ''} onClick={() => { setShowForm(!showForm); setPage('Products') }}>Add Product</button>
        </nav>

        <button className="cart-nav" onClick={() => setPage('Cart')}>
          🛒 <span>{Object.values(cart).reduce((sum, qty) => sum + qty, 0)}</span>
        </button>
      </header>

      <main className="container">
        {message && (
          <div className="message">
            <span>{message}</span>
            <button onClick={() => setMessage('')} aria-label="Dismiss message">×</button>
          </div>
        )}

        {page === 'Home' && (
          <>
            <section className="hero">
              <div>
                <p className="eyebrow">WELCOME TO GILLEGO PRODUCT HUB </p>
                <h1>Find Your Next Favorite</h1>
                <p>Discover quality products, great prices, and everything you need in one place.</p>
                <button className="primary-button" onClick={() => setPage('Products')}>Shop Now →</button>
              </div>
                <div className="hero-art" aria-hidden="true">🛍️</div>
            </section>

            <section className="section">
              <div className="section-heading">
                <h2>Featured Products</h2>
                <button className="text-button" onClick={() => setPage('Products')}>View All →</button>
              </div>
              <div className="featured-grid">
                {products.slice(0, 3).map((product) => (
                  <button className="featured-card" key={product.id} onClick={() => openDetails(product)}>
                    <img src={product.image} alt={product.name} />
                    <div>
                      <h3>{product.name}</h3>
                      <p>{product.category}</p>
                      <strong>{money(product.price)}</strong>
                    </div>
                    <span className="arrow">→</span>
                  </button>
                ))}
              </div>
            </section>
          </>
        )}

        {showForm && (
          <section className="section form-section">
            <div className="section-heading">
              <h2>Add New Product</h2>
              <button className="text-button" onClick={() => setShowForm(false)}>Cancel</button>
            </div>
            <form className="product-form" onSubmit={submitProduct}>
              <label>Feature Image URL<input type="url" value={form.image} onChange={(e) => setForm({ ...form, image: e.target.value })} required placeholder="https://example.com/product.jpg" /></label>
              <label>Product Name<input value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} required /></label>
              <label>Product Category<input value={form.category} onChange={(e) => setForm({ ...form, category: e.target.value })} required placeholder="e.g. Electronics" /></label>
              <label>Rating (1–5)<input type="number" min="1" max="5" step="0.1" value={form.rating} onChange={(e) => setForm({ ...form, rating: e.target.value })} required /></label>
              <label>Description<textarea value={form.description} onChange={(e) => setForm({ ...form, description: e.target.value })} required /></label>
              <label>Product Specification<textarea value={form.specification} onChange={(e) => setForm({ ...form, specification: e.target.value })} required /></label>
              <label>Price (₱)<input type="number" min="0.01" step="0.01" value={form.price} onChange={(e) => setForm({ ...form, price: e.target.value })} required /></label>
              <label>Quantity<input type="number" min="0" step="1" value={form.quantity} onChange={(e) => setForm({ ...form, quantity: e.target.value })} required /></label>
              <button className="primary-button form-submit" type="submit">Add Product</button>
            </form>
          </section>
        )}

        {(page === 'Products' || page === 'Home') && (
          <section className="section">
            <div className="section-heading product-heading">
              <h2>Product List</h2>
              <label className="filter-label">
                Category:
                <select value={category} onChange={(e) => setCategory(e.target.value)}>
                  {categories.map((item) => <option key={item} value={item}>{item}</option>)}
                </select>
              </label>
            </div>

            <div className="content-layout">
              <div className="product-grid">
                {filteredProducts.map((product) => {
                  const qty = quantities[product.id] || 1
                  return (
                    <article className="product-card" key={product.id}>
                      {product.quantity < 5 && <span className="stock-badge">LOW STOCK</span>}
                      <button className="product-image-button" onClick={() => openDetails(product)} aria-label={`View ${product.name} details`}>
                        <img src={product.image} alt={product.name} />
                      </button>
                      <div className="product-info">
                        <button className="product-title" onClick={() => openDetails(product)}>{product.name}</button>
                        <p className="category-text">{product.category}</p>
                        <strong className="price">{money(product.price)}</strong>
                        <p className={product.quantity < 5 ? 'stock low' : 'stock'}>
                          ● {product.quantity < 5 ? 'Low Stock' : 'In Stock'} ({product.quantity})
                        </p>
                        <div className="quantity-control">
                          <button onClick={() => changeQuantity(product.id, -1)} disabled={qty <= 1}>−</button>
                          <span>{qty}</span>
                          <button onClick={() => changeQuantity(product.id, 1)} disabled={qty >= product.quantity}>+</button>
                        </div>
                        <p className="subtotal">Subtotal: <b>{money(product.price * qty)}</b></p>
                      </div>
                      <button className="primary-button add-button" onClick={() => addToCart(product)} disabled={product.quantity === 0}>
                        🛒 Add to Cart
                      </button>
                    </article>
                  )
                })}
                {filteredProducts.length === 0 && <p>No products found in this category.</p>}
              </div>

              <aside className="cart-panel">
                <h2>Your Cart</h2>
                {cartItems.length === 0 ? (
                  <p className="empty-cart">Your cart is empty. Add a product to get started.</p>
                ) : (
                  cartItems.map((product) => (
                    <div className="cart-item" key={product.id}>
                      <img src={product.image} alt={product.name} />
                      <div className="cart-item-info">
                        <h3>{product.name}</h3>
                        <strong>{money(product.price)}</strong>
                        <div className="quantity-control">
                          <button onClick={() => changeCartQuantity(product.id, -1)}>−</button>
                          <span>{cart[product.id]}</span>
                          <button onClick={() => changeCartQuantity(product.id, 1)} disabled={cart[product.id] >= product.quantity}>+</button>
                        </div>
                      </div>
                      <button className="remove-button" onClick={() => setCart((previous) => ({ ...previous, [product.id]: 0 }))} aria-label={`Remove ${product.name}`}>×</button>
                    </div>
                  ))
                )}
                <div className="cart-total">
                  <span>Total</span>
                  <strong>{money(total)}</strong>
                </div>
                <button className="primary-button checkout-button" onClick={() => setMessage('Cart total: ' + money(total))} disabled={cartItems.length === 0}>Cart Summary</button>
              </aside>
            </div>
          </section>
        )}

        {page === 'Details' && selectedProduct && (
          <section className="section detail-section">
            <button className="text-button" onClick={() => setPage('Products')}>← Back to Products</button>
            <div className="detail-layout">
              <img className="detail-image" src={selectedProduct.image} alt={selectedProduct.name} />
              <div className="detail-info">
                <p className="category-text">{selectedProduct.category}</p>
                <h1>{selectedProduct.name}</h1>
                <p className="rating">⭐ {selectedProduct.rating} / 5</p>
                <h2 className="detail-price">{money(selectedProduct.price)}</h2>
                <p>{selectedProduct.description}</p>
                <h3>Specifications</h3>
                <p>{selectedProduct.specification}</p>
                <p className={selectedProduct.quantity < 5 ? 'stock low' : 'stock'}>
                  Available: {selectedProduct.quantity} {selectedProduct.quantity < 5 ? '— Low Stock' : 'units'}
                </p>
                <button className="primary-button" onClick={() => addToCart(selectedProduct)} disabled={selectedProduct.quantity === 0}>🛒 Add to Cart</button>
              </div>
            </div>
          </section>
        )}

        {page === 'Cart' && (
          <section className="section standalone-cart">
            <h2>Your Shopping Cart</h2>
            {cartItems.length === 0 ? <p>Your cart is empty.</p> : cartItems.map((product) => (
              <div className="cart-item" key={product.id}>
                <img src={product.image} alt={product.name} />
                <div className="cart-item-info">
                  <h3>{product.name}</h3>
                  <strong>{money(product.price * cart[product.id])}</strong>
                  <div className="quantity-control">
                    <button onClick={() => changeCartQuantity(product.id, -1)}>−</button>
                    <span>{cart[product.id]}</span>
                    <button onClick={() => changeCartQuantity(product.id, 1)} disabled={cart[product.id] >= product.quantity}>+</button>
                  </div>
                </div>
                <button className="remove-button" onClick={() => setCart((previous) => ({ ...previous, [product.id]: 0 }))}>Remove</button>
              </div>
            ))}
            <div className="cart-total"><span>Overall Total</span><strong>{money(total)}</strong></div>
          </section>
        )}

        <footer className="footer"> GILLEGO PRODUCT HUB · Product Management App</footer>
      </main>
    </div>
  )
}

export default App
