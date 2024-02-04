// utils/stripe.js

import { Stripe } from 'stripe';

// const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
const stripe = new Stripe("sk_test_51OVEYzANOfg5excPWQTVzr98H8KjT5Kv7kSE5ey5PUkE2kZq41PHvjsjiWlWXxHvSGqE00cl5zWiiqDSnYDC328i00OhfIDRW9", {
  apiVersion: '2020-08-27', // Use the latest API version
});

export { stripe };
