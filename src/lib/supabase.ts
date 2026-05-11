import { createClient } from '@supabase/supabase-js';

const url = import.meta.env.VITE_SUPABASE_URL as string;
const key = import.meta.env.VITE_SUPABASE_ANON_KEY as string;

export const supabase = createClient(url, key);

export type Database = {
  public: {
    Tables: {
      profiles: {
        Row: { id: string; email: string; created_at: string; email_verified: boolean };
        Insert: { id: string; email: string };
        Update: { email?: string; email_verified?: boolean };
      };
      favorited_tricks: {
        Row: { user_id: string; trick_id: string };
        Insert: { user_id: string; trick_id: string };
        Update: never;
      };
      learned_tricks: {
        Row: { user_id: string; trick_id: string };
        Insert: { user_id: string; trick_id: string };
        Update: never;
      };
      favorited_exercises: {
        Row: { user_id: string; exercise_id: string };
        Insert: { user_id: string; exercise_id: string };
        Update: never;
      };
      programs: {
        Row: { id: string; user_id: string; name: string; spotify_url: string | null; created_at: string };
        Insert: { id: string; user_id: string; name: string; spotify_url?: string | null };
        Update: { name?: string; spotify_url?: string | null };
      };
      program_tricks: {
        Row: { id: string; program_id: string; trick_id: string; position: number };
        Insert: { id: string; program_id: string; trick_id: string; position: number };
        Update: { position?: number };
      };
    };
  };
};
