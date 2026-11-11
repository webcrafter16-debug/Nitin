import React, { useState } from 'react';
import { DemoBanner } from '../../components/common/DemoBanner';
import { SAMPLE_PRODUCTS } from '../../data/ecommerceData';
import { Product } from '../../types';
import { useCart } from '../../context/CartContext';
import { 
  ShoppingBag, 
  Search, 
  Star, 
  Plus, 
  Minus, 
  Trash2, 
  X, 
  CheckCircle2, 
  ArrowRight, 
  ShieldCheck, 
  Tag, 
  Truck, 
  Sparkles,
  Info
} from 'lucide-react';

export const EcommerceStoreDemo: React.FC = () => {
  const {
    cart,
    addToCart,
    updateQuantity,
    removeFromCart,
    clearCart,
    totalItemsCount,
    subtotal,
    discountAmount,
    shippingFee,
    finalTotal,
    appliedCoupon,
    couponError,
    applyCoupon,
    removeCoupon,
    isCartDrawerOpen,
    setIsCartDrawerOpen,
  } = useCart();

  // Search and Category filtering
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  
  // Product Detail Modal
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [modalQuantity, setModalQuantity] = useState(1);

  // Promo code input
  const [couponInput, setCouponInput] = useState('');

  // Checkout modal
  const [showCheckoutModal, setShowCheckoutModal] = useState(false);
  const [checkoutStep, setCheckoutStep] = useState<'form' | 'success'>('form');
  const [checkoutForm, setCheckoutForm] = useState({
    name: 'Emily Davis',
    email: 'emily.davis@example.com',
    address: '428 Heritage Way',
    city: 'Seattle',
    stateZip: 'WA 98101',
    country: 'United States'
  });
  const [generatedOrderId, setGeneratedOrderId] = useState<string>('');

  const filteredProducts = SAMPLE_PRODUCTS.filter((prod) => {
    const matchesSearch =
      searchTerm === '' ||
      prod.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      prod.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      prod.material.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesCategory =
      selectedCategory === 'all' || prod.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  const handleOpenDetail = (product: Product) => {
    setSelectedProduct(product);
    setModalQuantity(1);
  };

  const handleApplyCoupon = (e: React.FormEvent) => {
    e.preventDefault();
    if (!couponInput.trim()) return;
    const ok = applyCoupon(couponInput);
    if (ok) setCouponInput('');
  };

  const handleStartCheckout = () => {
    setIsCartDrawerOpen(false);
    setShowCheckoutModal(true);
    setCheckoutStep('form');
  };

  const handleCompleteOrder = (e: React.FormEvent) => {
    e.preventDefault();
    const orderNum = `KOB-${Math.floor(100000 + Math.random() * 900000)}`;
    setGeneratedOrderId(orderNum);
    setCheckoutStep('success');
    clearCart();
  };

  return (
    <div className="bg-stone-950 text-stone-100 min-h-screen">
      {/* Demo Banner */}
      <DemoBanner
        conceptName="Kōbo Artisanal Goods & Living"
        categoryLabel="Artisan E-Commerce Storefront"
        pageTierLabel="Full E-Commerce Architecture"
        specs={[
          'Curated artisanal catalog with category & keyword filters',
          'Interactive Product Detail view with materials & stock levels',
          'Reactive cart state with quantity +/- and empty-cart screen',
          'Coupon code discount logic (Try "WEBCRAFT10" for 10% off)',
          'Safe simulated checkout with zero financial data collection'
        ]}
      />

      {/* Store Header */}
      <header className="bg-stone-900 border-b border-stone-800 sticky top-10 z-30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 flex items-center justify-between gap-4">
          
          <div className="flex items-center gap-3">
            <span className="w-8 h-8 rounded-full bg-amber-700/30 border border-amber-600/50 flex items-center justify-center font-serif text-amber-400 font-bold text-lg">
              工
            </span>
            <div>
              <span className="text-xl font-serif font-bold tracking-wider text-white">KŌBO</span>
              <span className="text-[10px] text-stone-400 block -mt-1 font-mono uppercase tracking-widest">
                Artisanal Living & Ceramics
              </span>
            </div>
          </div>

          {/* Quick Notice Badge */}
          <div className="hidden md:flex items-center gap-2 text-xs text-amber-400/90 font-mono bg-amber-950/40 px-3 py-1 rounded-full border border-amber-800/60">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Store Demo: Try coupon "WEBCRAFT10" for 10% off</span>
          </div>

          {/* Cart Trigger */}
          <button
            onClick={() => setIsCartDrawerOpen(true)}
            className="flex items-center gap-2 px-3.5 py-2 bg-stone-800 hover:bg-stone-700 text-stone-200 rounded-lg text-xs font-medium transition-colors cursor-pointer relative"
            aria-label="Open shopping cart"
          >
            <ShoppingBag className="w-4 h-4 text-amber-400" />
            <span className="hidden sm:inline">Bag</span>
            <span className="w-5 h-5 rounded-full bg-amber-500 text-stone-950 font-bold text-[11px] flex items-center justify-center">
              {totalItemsCount}
            </span>
          </button>
        </div>
      </header>

      {/* Hero Announcement */}
      <section className="border-b border-stone-800 bg-stone-900/40 py-12 px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-2xl mx-auto space-y-3">
          <span className="text-xs uppercase tracking-widest text-amber-500 font-serif font-semibold">
            Handcrafted Tableware & Home Goods
          </span>
          <h1 className="text-3xl sm:text-4xl font-serif font-bold text-white tracking-tight">
            Quiet Objects for Mindful Living
          </h1>
          <p className="text-xs sm:text-sm text-stone-400 font-serif leading-relaxed">
            Every piece is wheel-thrown, slip-cast, or hand-woven by master craftspeople across Japan and Belgium. Made to endure daily use with grace.
          </p>
        </div>
      </section>

      {/* Catalog & Filter Section */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
        
        {/* Filters and Search Bar */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 border-b border-stone-800 pb-6">
          {/* Categories */}
          <div className="flex flex-wrap items-center gap-2">
            {[
              { id: 'all', label: 'All Artifacts' },
              { id: 'tableware', label: 'Tableware' },
              { id: 'coffee-tea', label: 'Coffee & Tea' },
              { id: 'kitchen-gear', label: 'Kitchen Gear' },
              { id: 'home-living', label: 'Home & Living' },
            ].map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-3 py-1.5 rounded-lg text-xs font-serif transition-colors cursor-pointer ${
                  selectedCategory === cat.id
                    ? 'bg-amber-600 text-stone-950 font-bold'
                    : 'bg-stone-900 text-stone-300 hover:bg-stone-800'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Search */}
          <div className="relative w-full sm:w-64">
            <Search className="w-3.5 h-3.5 text-stone-500 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search ceramics, oak, linen..."
              className="w-full pl-9 pr-3 py-1.5 bg-stone-900 border border-stone-800 rounded-lg text-xs text-white placeholder-stone-500 focus:outline-none focus:ring-1 focus:ring-amber-500"
            />
          </div>
        </div>

        {/* Products Grid */}
        {filteredProducts.length === 0 ? (
          <div className="py-16 text-center text-stone-400 space-y-3">
            <p className="text-sm">No products found matching your search criteria.</p>
            <button
              onClick={() => { setSearchTerm(''); setSelectedCategory('all'); }}
              className="px-4 py-1.5 bg-stone-800 text-xs text-white rounded"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredProducts.map((prod) => (
              <div
                key={prod.id}
                className="group bg-stone-900/60 border border-stone-800/90 hover:border-amber-500/50 rounded-xl overflow-hidden flex flex-col justify-between transition-all"
              >
                <div 
                  onClick={() => handleOpenDetail(prod)}
                  className="cursor-pointer"
                >
                  {/* Product Image Container */}
                  <div className="relative h-56 bg-stone-900 overflow-hidden">
                    <img
                      src={prod.image}
                      alt={prod.name}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      onError={(e) => {
                        // Fallback to elegant gradient if image fails
                        (e.target as HTMLElement).style.display = 'none';
                      }}
                    />
                    <div className="absolute top-2.5 right-2.5 bg-stone-950/80 backdrop-blur-sm px-2 py-0.5 rounded text-[11px] font-mono text-stone-300">
                      {prod.categoryLabel}
                    </div>
                  </div>

                  {/* Product Info */}
                  <div className="p-4 space-y-2">
                    <div className="flex items-center gap-1 text-[11px] text-amber-400">
                      <Star className="w-3.5 h-3.5 fill-current" />
                      <span className="font-mono font-bold">{prod.rating}</span>
                      <span className="text-stone-500">({prod.reviewsCount})</span>
                    </div>

                    <h3 className="font-serif font-bold text-white text-base group-hover:text-amber-400 transition-colors line-clamp-1">
                      {prod.name}
                    </h3>

                    <p className="text-xs text-stone-400 line-clamp-2 leading-relaxed font-serif">
                      {prod.description}
                    </p>
                  </div>
                </div>

                {/* Price and Add Button */}
                <div className="p-4 pt-0 flex items-center justify-between border-t border-stone-800/60 mt-2">
                  <div className="font-serif font-bold text-white text-base">
                    ${prod.priceUSD} <span className="text-[10px] text-stone-500 font-sans font-normal">USD</span>
                  </div>
                  <button
                    onClick={() => addToCart(prod, 1)}
                    className="px-3 py-1.5 bg-amber-600 hover:bg-amber-500 text-stone-950 font-bold text-xs rounded transition-colors flex items-center gap-1 cursor-pointer"
                  >
                    <Plus className="w-3.5 h-3.5" />
                    <span>Add to Bag</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </main>

      {/* Product Detail Modal */}
      {selectedProduct && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-stone-950/80 backdrop-blur-sm animate-fade-in">
          <div className="bg-stone-900 border border-stone-800 rounded-2xl max-w-2xl w-full p-6 sm:p-8 relative shadow-2xl overflow-y-auto max-h-[90vh]">
            <button
              onClick={() => setSelectedProduct(null)}
              className="absolute top-4 right-4 text-stone-400 hover:text-white p-1 rounded-lg"
              aria-label="Close product modal"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 items-start">
              <div className="rounded-xl overflow-hidden bg-stone-950 border border-stone-800">
                <img
                  src={selectedProduct.image}
                  alt={selectedProduct.name}
                  referrerPolicy="no-referrer"
                  className="w-full h-72 object-cover"
                />
              </div>

              <div className="space-y-4 text-xs">
                <span className="text-[11px] font-mono text-amber-400 uppercase tracking-wider block">
                  {selectedProduct.categoryLabel}
                </span>
                <h3 className="text-2xl font-serif font-bold text-white">
                  {selectedProduct.name}
                </h3>
                <div className="text-xl font-serif font-bold text-white">
                  ${selectedProduct.priceUSD} USD
                </div>
                <p className="text-stone-300 leading-relaxed font-serif">
                  {selectedProduct.description}
                </p>

                <div className="space-y-1.5 text-stone-400 border-t border-stone-800 pt-3">
                  <div><strong className="text-stone-200">Material:</strong> {selectedProduct.material}</div>
                  <div><strong className="text-stone-200">Dimensions:</strong> {selectedProduct.dimensions}</div>
                  <div className="text-emerald-400">✓ In Stock ({selectedProduct.stockCount} units remaining)</div>
                </div>

                {/* Quantity and Add */}
                <div className="pt-2 flex items-center gap-3">
                  <div className="flex items-center border border-stone-700 rounded bg-stone-950">
                    <button
                      onClick={() => setModalQuantity(Math.max(1, modalQuantity - 1))}
                      className="p-1.5 text-stone-400 hover:text-white"
                    >
                      <Minus className="w-3.5 h-3.5" />
                    </button>
                    <span className="px-3 font-mono font-bold text-white">{modalQuantity}</span>
                    <button
                      onClick={() => setModalQuantity(Math.min(selectedProduct.stockCount, modalQuantity + 1))}
                      className="p-1.5 text-stone-400 hover:text-white"
                    >
                      <Plus className="w-3.5 h-3.5" />
                    </button>
                  </div>

                  <button
                    onClick={() => {
                      addToCart(selectedProduct, modalQuantity);
                      setSelectedProduct(null);
                    }}
                    className="flex-1 py-2.5 bg-amber-600 hover:bg-amber-500 text-stone-950 font-bold rounded text-xs transition-colors"
                  >
                    Add {modalQuantity} to Bag
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Cart Drawer Overlay */}
      {isCartDrawerOpen && (
        <div className="fixed inset-0 z-50 flex justify-end bg-stone-950/70 backdrop-blur-sm animate-fade-in">
          <div className="w-full max-w-md bg-stone-900 border-l border-stone-800 h-full p-6 flex flex-col justify-between shadow-2xl">
            {/* Drawer Header */}
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-stone-800">
                <div className="flex items-center gap-2">
                  <ShoppingBag className="w-5 h-5 text-amber-500" />
                  <h3 className="font-serif font-bold text-lg text-white">Your Shopping Bag ({totalItemsCount})</h3>
                </div>
                <button
                  onClick={() => setIsCartDrawerOpen(false)}
                  className="p-1 text-stone-400 hover:text-white"
                  aria-label="Close cart drawer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Free shipping progress bar */}
              <div className="py-3 border-b border-stone-800 text-[11px] text-stone-400">
                {subtotal >= 75 ? (
                  <span className="text-emerald-400 font-semibold flex items-center gap-1.5">
                    <Truck className="w-4 h-4" /> You have unlocked FREE Express Shipping!
                  </span>
                ) : (
                  <span>
                    Add ${(75 - subtotal).toFixed(2)} more for <strong>FREE shipping</strong>!
                  </span>
                )}
              </div>
            </div>

            {/* Cart Items List */}
            <div className="flex-1 overflow-y-auto py-4 space-y-4">
              {cart.length === 0 ? (
                <div className="text-center py-12 space-y-3 text-stone-400 text-xs">
                  <ShoppingBag className="w-10 h-10 text-stone-600 mx-auto" />
                  <p>Your bag is currently empty.</p>
                  <button
                    onClick={() => setIsCartDrawerOpen(false)}
                    className="px-4 py-2 bg-stone-800 text-white rounded font-serif text-xs"
                  >
                    Discover Artifacts
                  </button>
                </div>
              ) : (
                cart.map((item) => (
                  <div
                    key={item.product.id}
                    className="flex gap-3 p-3 bg-stone-950/80 rounded-xl border border-stone-800 text-xs"
                  >
                    <img
                      src={item.product.image}
                      alt={item.product.name}
                      className="w-16 h-16 object-cover rounded-lg shrink-0"
                    />
                    <div className="flex-1 min-w-0 space-y-1">
                      <div className="flex items-start justify-between gap-2">
                        <h4 className="font-serif font-bold text-white truncate">{item.product.name}</h4>
                        <button
                          onClick={() => removeFromCart(item.product.id)}
                          className="text-stone-500 hover:text-rose-400"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>
                      <div className="font-mono text-stone-400">${item.product.priceUSD} each</div>
                      <div className="flex items-center gap-2 pt-1">
                        <button
                          onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                          className="w-5 h-5 rounded bg-stone-800 flex items-center justify-center text-stone-300"
                        >
                          -
                        </button>
                        <span className="font-mono font-bold text-white">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                          className="w-5 h-5 rounded bg-stone-800 flex items-center justify-center text-stone-300"
                        >
                          +
                        </button>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>

            {/* Cart Footer: Totals, Coupon, Checkout */}
            {cart.length > 0 && (
              <div className="border-t border-stone-800 pt-4 space-y-3 text-xs">
                {/* Coupon input */}
                {appliedCoupon ? (
                  <div className="p-2 bg-emerald-950/60 border border-emerald-800 rounded flex items-center justify-between text-emerald-300">
                    <span>Coupon <strong>{appliedCoupon}</strong> (-10% applied)</span>
                    <button onClick={removeCoupon} className="text-xs text-stone-400 hover:text-white underline">
                      Remove
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleApplyCoupon} className="flex gap-2">
                    <input
                      type="text"
                      value={couponInput}
                      onChange={(e) => setCouponInput(e.target.value)}
                      placeholder="Coupon Code (e.g. WEBCRAFT10)"
                      className="flex-1 px-3 py-1.5 bg-stone-950 border border-stone-800 rounded text-xs text-white uppercase placeholder-stone-500 focus:outline-none"
                    />
                    <button
                      type="submit"
                      className="px-3 py-1.5 bg-stone-800 hover:bg-stone-700 text-stone-200 rounded text-xs"
                    >
                      Apply
                    </button>
                  </form>
                )}
                {couponError && <p className="text-[11px] text-rose-400">{couponError}</p>}

                {/* Subtotal breakdown */}
                <div className="space-y-1.5 text-stone-400 pt-1">
                  <div className="flex justify-between">
                    <span>Subtotal:</span>
                    <span className="font-mono text-white">${subtotal.toFixed(2)}</span>
                  </div>
                  {discountAmount > 0 && (
                    <div className="flex justify-between text-emerald-400">
                      <span>Discount (10%):</span>
                      <span className="font-mono">-${discountAmount.toFixed(2)}</span>
                    </div>
                  )}
                  <div className="flex justify-between">
                    <span>Standard Express Shipping:</span>
                    <span className="font-mono text-white">
                      {shippingFee === 0 ? 'FREE' : `$${shippingFee.toFixed(2)}`}
                    </span>
                  </div>
                  <div className="flex justify-between text-sm font-bold text-white pt-2 border-t border-stone-800">
                    <span>Estimated Total:</span>
                    <span className="font-mono text-amber-400 text-base">${finalTotal.toFixed(2)} USD</span>
                  </div>
                </div>

                <button
                  onClick={handleStartCheckout}
                  className="w-full py-3 bg-amber-600 hover:bg-amber-500 text-stone-950 font-bold font-serif rounded-lg transition-colors cursor-pointer text-xs"
                >
                  Proceed to Safe Demo Checkout
                </button>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Safe Simulated Checkout Modal */}
      {showCheckoutModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-stone-950/80 backdrop-blur-sm animate-fade-in">
          <div className="bg-stone-900 border border-stone-800 rounded-2xl max-w-lg w-full p-6 sm:p-8 relative shadow-2xl max-h-[90vh] overflow-y-auto">
            <button
              onClick={() => setShowCheckoutModal(false)}
              className="absolute top-4 right-4 text-stone-400 hover:text-white p-1 rounded-lg"
              aria-label="Close checkout modal"
            >
              <X className="w-5 h-5" />
            </button>

            {checkoutStep === 'form' ? (
              <form onSubmit={handleCompleteOrder} className="space-y-5 text-xs text-stone-300">
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-widest text-amber-500 block mb-1">
                    Safe Simulated Demo Checkout
                  </span>
                  <h3 className="text-xl font-serif font-bold text-white">
                    Simulate Order Placement
                  </h3>
                </div>

                {/* Safe Demo Warning Box */}
                <div className="p-3 bg-amber-950/40 border border-amber-600/40 rounded-lg text-amber-300 text-[11px] flex items-start gap-2">
                  <ShieldCheck className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                  <span>
                    <strong>Demonstration Notice:</strong> This is a portfolio simulation. No real credit card information is collected and no actual monetary transactions occur.
                  </span>
                </div>

                <div className="space-y-3">
                  <div>
                    <label className="block text-stone-400 font-semibold mb-1">Recipient Name</label>
                    <input
                      type="text"
                      required
                      value={checkoutForm.name}
                      onChange={(e) => setCheckoutForm({ ...checkoutForm, name: e.target.value })}
                      className="w-full p-2.5 bg-stone-950 border border-stone-800 rounded text-white"
                    />
                  </div>

                  <div>
                    <label className="block text-stone-400 font-semibold mb-1">Email For Order Confirmation</label>
                    <input
                      type="email"
                      required
                      value={checkoutForm.email}
                      onChange={(e) => setCheckoutForm({ ...checkoutForm, email: e.target.value })}
                      className="w-full p-2.5 bg-stone-950 border border-stone-800 rounded text-white"
                    />
                  </div>

                  <div>
                    <label className="block text-stone-400 font-semibold mb-1">Shipping Address</label>
                    <input
                      type="text"
                      required
                      value={checkoutForm.address}
                      onChange={(e) => setCheckoutForm({ ...checkoutForm, address: e.target.value })}
                      className="w-full p-2.5 bg-stone-950 border border-stone-800 rounded text-white"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block text-stone-400 font-semibold mb-1">City</label>
                      <input
                        type="text"
                        required
                        value={checkoutForm.city}
                        onChange={(e) => setCheckoutForm({ ...checkoutForm, city: e.target.value })}
                        className="w-full p-2.5 bg-stone-950 border border-stone-800 rounded text-white"
                      />
                    </div>
                    <div>
                      <label className="block text-stone-400 font-semibold mb-1">State / Postal Code</label>
                      <input
                        type="text"
                        required
                        value={checkoutForm.stateZip}
                        onChange={(e) => setCheckoutForm({ ...checkoutForm, stateZip: e.target.value })}
                        className="w-full p-2.5 bg-stone-950 border border-stone-800 rounded text-white"
                      />
                    </div>
                  </div>
                </div>

                <div className="p-3 bg-stone-950 rounded-lg border border-stone-800 flex items-center justify-between text-xs">
                  <span>Simulated Total to Charge:</span>
                  <span className="font-mono font-bold text-amber-400 text-sm">${finalTotal.toFixed(2)} USD</span>
                </div>

                <button
                  type="submit"
                  className="w-full py-3 bg-amber-600 hover:bg-amber-500 text-stone-950 font-bold font-serif rounded-lg transition-colors cursor-pointer"
                >
                  Place Simulated Test Order (${finalTotal.toFixed(2)})
                </button>
              </form>
            ) : (
              <div className="text-center py-6 space-y-4 text-xs text-stone-300 animate-fade-in">
                <div className="w-14 h-14 rounded-full bg-emerald-950 border border-emerald-500 flex items-center justify-center text-emerald-400 mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-serif font-bold text-white">Order Confirmed!</h3>
                <p className="text-stone-400 max-w-sm mx-auto">
                  Thank you, {checkoutForm.name}! Your simulated test purchase was processed successfully.
                </p>

                <div className="p-4 bg-stone-950 rounded-xl border border-stone-800 text-left space-y-2 font-mono">
                  <div className="flex justify-between text-stone-400">
                    <span>Order Reference:</span>
                    <span className="text-amber-400 font-bold">{generatedOrderId}</span>
                  </div>
                  <div className="flex justify-between text-stone-400">
                    <span>Estimated Dispatch:</span>
                    <span className="text-white">Tomorrow morning</span>
                  </div>
                  <div className="flex justify-between text-stone-400">
                    <span>Delivery Address:</span>
                    <span className="text-stone-300">{checkoutForm.address}, {checkoutForm.city}</span>
                  </div>
                </div>

                <button
                  onClick={() => setShowCheckoutModal(false)}
                  className="px-6 py-2 bg-stone-800 hover:bg-stone-700 text-white font-serif rounded text-xs transition-colors"
                >
                  Return to Storefront
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};
