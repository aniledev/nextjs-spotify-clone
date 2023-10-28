/* eslint-disable @typescript-eslint/ban-types */

export type Json =
  | string
  | number
  | boolean
  | undefined
  | { [key: string]: Json | undefined }
  | Json[];

export type Database = {
  public: {
    Tables: {
      customers: {
        Row: {
          id: string;
          stripe_customer_id: string | undefined;
        };
        Insert: {
          id: string;
          stripe_customer_id?: string | undefined;
        };
        Update: {
          id?: string;
          stripe_customer_id?: string | undefined;
        };
        Relationships: [
          {
            foreignKeyName: "customers_id_fkey";
            columns: ["id"];
            referencedRelation: "users";
            referencedColumns: ["id"];
          },
        ];
      };
      liked_songs: {
        Row: {
          created_at: string;
          song_id: number;
          user_id: string;
        };
        Insert: {
          created_at?: string;
          song_id: number;
          user_id: string;
        };
        Update: {
          created_at?: string;
          song_id?: number;
          user_id?: string;
        };
        Relationships: [
          {
            foreignKeyName: "liked_songs_song_id_fkey";
            columns: ["song_id"];
            referencedRelation: "songs";
            referencedColumns: ["id"];
          },
          {
            foreignKeyName: "liked_songs_user_id_fkey";
            columns: ["user_id"];
            referencedRelation: "users";
            referencedColumns: ["id"];
          },
        ];
      };
      prices: {
        Row: {
          active: boolean | undefined;
          currency: string | undefined;
          description: string | undefined;
          id: string;
          interval:
            | Database["public"]["Enums"]["pricing_plan_interval"]
            | undefined;
          interval_count: number | undefined;
          metadata: Json | undefined;
          product_id: string | undefined;
          trial_period_days: number | undefined;
          type: Database["public"]["Enums"]["pricing_type"] | undefined;
          unit_amount: number | undefined;
        };
        Insert: {
          active?: boolean | undefined;
          currency?: string | undefined;
          description?: string | undefined;
          id: string;
          interval?:
            | Database["public"]["Enums"]["pricing_plan_interval"]
            | undefined;
          interval_count?: number | undefined;
          metadata?: Json | undefined;
          product_id?: string | undefined;
          trial_period_days?: number | undefined;
          type?: Database["public"]["Enums"]["pricing_type"] | undefined;
          unit_amount?: number | undefined;
        };
        Update: {
          active?: boolean | undefined;
          currency?: string | undefined;
          description?: string | undefined;
          id?: string;
          interval?:
            | Database["public"]["Enums"]["pricing_plan_interval"]
            | undefined;
          interval_count?: number | undefined;
          metadata?: Json | undefined;
          product_id?: string | undefined;
          trial_period_days?: number | undefined;
          type?: Database["public"]["Enums"]["pricing_type"] | undefined;
          unit_amount?: number | undefined;
        };
        Relationships: [
          {
            foreignKeyName: "prices_product_id_fkey";
            columns: ["product_id"];
            referencedRelation: "products";
            referencedColumns: ["id"];
          },
        ];
      };
      products: {
        Row: {
          active: boolean | undefined;
          description: string | undefined;
          id: string;
          image: string | undefined;
          metadata: Json | undefined;
          name: string | undefined;
        };
        Insert: {
          active?: boolean | undefined;
          description?: string | undefined;
          id: string;
          image?: string | undefined;
          metadata?: Json | undefined;
          name?: string | undefined;
        };
        Update: {
          active?: boolean | undefined;
          description?: string | undefined;
          id?: string;
          image?: string | undefined;
          metadata?: Json | undefined;
          name?: string | undefined;
        };
        Relationships: [];
      };
      songs: {
        Row: {
          author: string | undefined;
          created_at: string;
          id: number;
          image_path: string | undefined;
          song_path: string | undefined;
          title: string | undefined;
          user_id: string | undefined;
        };
        Insert: {
          author?: string | undefined;
          created_at?: string;
          id?: number;
          image_path?: string | undefined;
          song_path?: string | undefined;
          title?: string | undefined;
          user_id?: string | undefined;
        };
        Update: {
          author?: string | undefined;
          created_at?: string;
          id?: number;
          image_path?: string | undefined;
          song_path?: string | undefined;
          title?: string | undefined;
          user_id?: string | undefined;
        };
        Relationships: [
          {
            foreignKeyName: "songs_user_id_fkey";
            columns: ["user_id"];
            referencedRelation: "users";
            referencedColumns: ["id"];
          },
        ];
      };
      subscriptions: {
        Row: {
          cancel_at: string | undefined;
          cancel_at_period_end: boolean | undefined;
          canceled_at: string | undefined;
          created: string;
          current_period_end: string;
          current_period_start: string;
          ended_at: string | undefined;
          id: string;
          metadata: Json | undefined;
          price_id: string | undefined;
          quantity: number | undefined;
          status:
            | Database["public"]["Enums"]["subscription_status"]
            | undefined;
          trial_end: string | undefined;
          trial_start: string | undefined;
          user_id: string;
        };
        Insert: {
          cancel_at?: string | undefined;
          cancel_at_period_end?: boolean | undefined;
          canceled_at?: string | undefined;
          created?: string;
          current_period_end?: string;
          current_period_start?: string;
          ended_at?: string | undefined;
          id: string;
          metadata?: Json | undefined;
          price_id?: string | undefined;
          quantity?: number | undefined;
          status?:
            | Database["public"]["Enums"]["subscription_status"]
            | undefined;
          trial_end?: string | undefined;
          trial_start?: string | undefined;
          user_id: string;
        };
        Update: {
          cancel_at?: string | undefined;
          cancel_at_period_end?: boolean | undefined;
          canceled_at?: string | undefined;
          created?: string;
          current_period_end?: string;
          current_period_start?: string;
          ended_at?: string | undefined;
          id?: string;
          metadata?: Json | undefined;
          price_id?: string | undefined;
          quantity?: number | undefined;
          status?:
            | Database["public"]["Enums"]["subscription_status"]
            | undefined;
          trial_end?: string | undefined;
          trial_start?: string | undefined;
          user_id?: string;
        };
        Relationships: [
          {
            foreignKeyName: "subscriptions_price_id_fkey";
            columns: ["price_id"];
            referencedRelation: "prices";
            referencedColumns: ["id"];
          },
          {
            foreignKeyName: "subscriptions_user_id_fkey";
            columns: ["user_id"];
            referencedRelation: "users";
            referencedColumns: ["id"];
          },
        ];
      };
      users: {
        Row: {
          avatar_url: string | undefined;
          billing_address: Json | undefined;
          full_name: string | undefined;
          id: string;
          payment_method: Json | undefined;
        };
        Insert: {
          avatar_url?: string | undefined;
          billing_address?: Json | undefined;
          full_name?: string | undefined;
          id: string;
          payment_method?: Json | undefined;
        };
        Update: {
          avatar_url?: string | undefined;
          billing_address?: Json | undefined;
          full_name?: string | undefined;
          id?: string;
          payment_method?: Json | undefined;
        };
        Relationships: [
          {
            foreignKeyName: "users_id_fkey";
            columns: ["id"];
            referencedRelation: "users";
            referencedColumns: ["id"];
          },
        ];
      };
    };
    Views: {
      [_ in never]: never;
    };
    Functions: {
      [_ in never]: never;
    };
    Enums: {
      pricing_plan_interval: "day" | "week" | "month" | "year";
      pricing_type: "one_time" | "recurring";
      subscription_status:
        | "trialing"
        | "active"
        | "canceled"
        | "incomplete"
        | "incomplete_expired"
        | "past_due"
        | "unpaid";
    };
    CompositeTypes: {
      [_ in never]: never;
    };
  };
};
