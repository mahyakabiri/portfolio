"use client";
import { useEffect } from "react";
import { enhance } from "@/lib/enhance";

export default function Enhancements({ roles }: { roles: readonly string[] }) {
  useEffect(() => enhance(roles), [roles]);
  return null;
}
