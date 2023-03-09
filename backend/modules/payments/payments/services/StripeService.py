import stripe
import environ

env = environ.Env()


class StripeService:
    stripe.api_key = env.str("STRIPE_SECRET_KEY", "sk_test_51MRWQ3HoclwoilpC1kVhvhoIg4W5SnK8ZSCNFMoNf8MY2AQ2ot3qGyPWkUxpdRn43GPa2259i6VGmBCAonOBjKXv00htYo9Lc4")

    @classmethod
    def create_payment_intent_sheet(cls, cus_id, cents):
        """
        create_payment_intent_sheet Creates PaymentIntent that encapsulates details about the transaction, such as the supported payment methods, the amount to collect, and the desired currency and an Ephemeral Key that can be used temporarily for API operations that typically require a secret key.
        :param cls: Optional param
        :param cus_id: ID of the Customer PaymentIntent belongs to, if one exists..
        :param cents: Amount intended to be collected.

        """
        ephemeralKey = stripe.EphemeralKey.create(
            customer=cus_id,
            stripe_version=env.str("STRIPE_VERSION", '2020-08-27'),
        )
        paymentIntent = stripe.PaymentIntent.create(
            amount=cents,
            currency=env.str("STRIPE_CURRENCY", 'usd'),
            customer=cus_id
        )

        return {
            "paymentIntent": paymentIntent.client_secret,
            "ephemeralKey": ephemeralKey.secret,
            "customer": cus_id
        }

    @classmethod
    def get_payments_history(cls, cus_id, limit=100, offset=0):
        """
        get_payments_history returns an array of up to `limit` PaymentIntents,  Each entry in the array is a separate PaymentIntent object. If no more PaymentIntents are available, the resulting array will be empty.

        :param cls: Optional param
        :param cus_id: Only return PaymentIntents for the customer specified by this customer ID.
        :param limit: A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10.

        """
        return stripe.PaymentIntent.list(
            customer=cus_id, limit=limit, offset=offset,
        ).get('data', [])

    @classmethod
    def get_payments_methods(cls, cus_id, type='card', limit=100, offset=0):
        """
        get_payments_methods returns a list of PaymentMethods attached to the StripeAccount. If no more PaymentMethods are available, the resulting array will be empty.

        :param cls: Optional param
        :param cus_id: The ID of the customer whose PaymentMethods will be retrieved.
        :param limit: A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10.


        """
        return stripe.PaymentMethod.list(customer=cus_id, type=type, limit=limit, offset=offset).get('data', [])
