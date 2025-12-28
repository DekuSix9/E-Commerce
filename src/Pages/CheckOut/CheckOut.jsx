

const CheckOut = () => {
    return (
        <div className=" max-w-11/12 mx-auto">
            <div className="max-w-3xl mx-auto bg-white  rounded-2xl  p-8 my-10 font-open">

  <h2 className="text-2xl font-bold mb-6">Place Your Order</h2>

  <form className="space-y-6">

    {/* contact */}
    <div>
      <h3 className="font-semibold mb-3">Contact Information</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <input className="border border-gray-400 rounded-lg p-3 w-full" placeholder="Full Name" />
        <input className="border border-gray-400 rounded-lg p-3 w-full" placeholder="Email Address" />
        <input className="border border-gray-400 rounded-lg p-3 w-full md:col-span-2" placeholder="Phone Number" />
      </div>
    </div>

    {/* Shipping */}
    <div>
      <h3 className="font-semibold mb-3"> Address</h3>
      <input className="border border-gray-400 rounded-lg p-3 w-full mb-3" placeholder="Street Address" />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <input className="border border-gray-400 rounded-lg p-3 w-full" placeholder="City" />
        <input className="border border-gray-400 rounded-lg p-3 w-full" placeholder="Postal Code" />
        <input className="border border-gray-400 rounded-lg p-3 w-full" placeholder="Country" />
      </div>
    </div>

    {/* Payment */}
    <div>
      <h3 className="font-semibold mb-3">Payment Method</h3>
      <div className="space-y-2">
        <label className="flex items-center gap-2">
          <input type="radio" name="payment" defaultChecked />
          <span>Cash on Delivery</span>
        </label>
       <div >
        
     <select className="border border-gray-400 rounded p-2 w-[20%] mt-2">
       
      <option >Online</option>
      <option>Debit Card</option>
      <option>Credit Card</option>
      <option>PayPal</option>
      <option>Bkash</option>
      <option>Nagad</option>
      <option>Rocket</option>
    </select>
  </div>
      </div>
    </div>

    {/* Notes */}
    <textarea className="border border-gray-400 rounded-lg p-3 w-full" rows="3" placeholder="Order Notes (Optional)" />

    {/* Button */}
    <button className="w-full bg-black hover:bg-gray-900 text-white py-3 rounded-lg font-semibold tracking-wide">
      Place Order
    </button>

  </form>
</div>

        </div>
    );
};

export default CheckOut;