import type Stripe from "stripe";

export type UserDetails = {
	avatar_url?: string;
	billing_address?: Stripe.Address;
	first_name: string;
	full_name?: string;
	id: string;
	last_name: string;
	payment_method?: Stripe.PaymentMethod[Stripe.PaymentMethod.Type];
};

export type Product = {
	active?: boolean;
	description?: string;
	id: string;
	image?: string;
	metadata?: Stripe.Metadata;
	name?: string;
};

export type Price = {
	active?: boolean;
	currency?: string;
	description?: string;
	id: string;
	interval_count?: number;
	interval?: Stripe.Price.Recurring.Interval;
	metadata?: Stripe.Metadata;
	product_id?: string;
	products?: Product;
	trial_period_days?: number | undefined;
	type?: Stripe.Price.Type;
	unit_amount?: number;
};

export type Subscription = {
	cancel_at_period_end?: boolean;
	cancel_at?: string;
	canceled_at?: string;
	created: string;
	current_period_end: string;
	current_period_start: string;
	ended_at?: string;
	id: string;
	metadata?: Stripe.Metadata;
	price_id?: string;
	prices?: Price;
	quantity?: number;
	status?: Stripe.Subscription.Status;
	trial_end?: string;
	trial_start?: string;
	user_id: string;
};
