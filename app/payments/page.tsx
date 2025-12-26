import { PolicyPage } from "@/components/layout/PolicyPage"
import Link from "next/link"

export default function PaymentsPage() {
  return (
    <PolicyPage title="Payments">
      <p className="text-justify mb-4">
        We offer secure and convenient payment options for our services.
      </p>
      
      <h2 className="text-2xl font-semibold mt-8 mb-4">Accepted Payment Methods</h2>
      <p className="text-justify mb-4">
        We accept major credit and debit cards, UPI, and bank transfers. All transactions are processed through 
        secure payment gateways to ensure your financial data is protected.
      </p>

      <h2 className="text-2xl md:text-3xl font-medium mt-12 mb-6">Payment Terms</h2>
      <p className="text-justify mb-4">
        Payment terms for our services are governed by our <Link href="/terms" className="text-primary underline">Terms & Conditions</Link>. 
        Generally, you agree to pay the charges associated with availing the Services as per the agreed pricing 
        or quotation.
      </p>

      <h2 className="text-2xl md:text-3xl font-medium mt-12 mb-6">Security</h2>
      <p className="text-justify mb-4">
        Your payment information is encrypted and processed securely. We do not store your sensitive payment 
        credentials on our servers.
      </p>

      <h2 className="text-2xl md:text-3xl font-medium mt-12 mb-6">Contact Us</h2>
      <p className="text-justify mb-4">
        If you have any questions regarding payments or billing, please contact us at <a href="mailto:hello@kisslead.com" className="text-primary underline">hello@kisslead.com</a>.
      </p>
    </PolicyPage>
  )
}
