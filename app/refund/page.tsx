import { PolicyPage } from "@/components/layout/PolicyPage"

export default function RefundPage() {
  return (
    <PolicyPage title="Refund & Cancellation Policy">
      <p className="text-justify mb-4">
        This refund and cancellation policy outlines how you can cancel or seek a refund for a product / service 
        that you have purchased through the Platform. Under this policy:
      </p>
      <ul className="list-disc pl-6 space-y-4 mt-4 text-justify">
        <li>
          Cancellations will only be considered if the request is made within 3 days of placing the order. However, 
          cancellation requests may not be entertained if the orders have been communicated to such sellers / 
          merchant(s) listed on the Platform and they have initiated the process of shipping them, or the 
          product is out for delivery. In such an event, you may choose to reject the product at the doorstep.
        </li>
        <li>
          Kisslead Technologies does not accept cancellation requests for perishable items like flowers, eatables, etc. 
          However, the refund / replacement can be made if the user establishes that the quality of the 
          product delivered is not good.
        </li>
        <li>
          In case of receipt of damaged or defective items, please report to our customer service team. The 
          request would be entertained once the seller/ merchant listed on the Platform, has checked and 
          determined the same at its own end. This should be reported within 3 days of receipt of products.
        </li>
        <li>
          In case you feel that the product received is not as shown on the site or as per your expectations, 
          you must bring it to the notice of our customer service within 3 days of receiving the product. The 
          customer service team after looking into your complaint will take an appropriate decision.
        </li>
        <li>
          In case of complaints regarding the products that come with a warranty from the manufacturers, 
          please refer the issue to them.
        </li>
        <li>
          In case of any refunds approved by Kisslead Technologies, it will take 3 days for the refund to be processed 
          to you.
        </li>
      </ul>
    </PolicyPage>
  )
}
