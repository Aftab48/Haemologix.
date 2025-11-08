// lib/actions/alert.actions.ts
"use server";

import { db } from "@/db";
import { formatLastActivity } from "../utils";

export async function createAlert(input: CreateAlertInput) {
  // Validate required fields
  if (!input.bloodType || !input.urgency || !input.radius) {
    return { success: false, error: "Missing required fields" };
  }

  try {
    const alert = await db.alert.create({
      data: {
        bloodType: input.bloodType,
        urgency: input.urgency,
        unitsNeeded: input.unitsNeeded,
        searchRadius: input.radius,
        description: input.description,
        hospitalId: input.hospitalId,
        latitude: input.latitude ?? "",
        longitude: input.longitude ?? "",
      },
    });

    return { success: true, alert };
  } catch (err) {
    console.error("Error creating alert:", err);
    return { success: false, error: "Failed to create alert" };
  }
}

// Fetch all alerts (optionally filter by hospitalId)
export async function getAlerts(hospitalId: string) {
  try {
    const alerts = await db.alert.findMany({
      where: { hospitalId },
      include: {
        hospital: true,
        responses: true, // Include all responses
      },
      orderBy: { createdAt: "desc" },
    });

    // transform DB → frontend-safe type with response counts
    return alerts.map((a) => ({
      id: a.id,
      bloodType: a.bloodType as BloodType,
      urgency: a.urgency as Urgency,
      unitsNeeded: a.unitsNeeded,
      radius: a.searchRadius as Radius,
      description: a.description ?? "",
      hospitalId: a.hospitalId,
      createdAt: formatLastActivity(a.createdAt, false),
      status: a.status,
      autoDetected: a.autoDetected,
      hospital: a.hospital,
      responses: a.responses.length, // Total responses count
      confirmed: a.responses.filter((r) => r.confirmed).length, // Confirmed responses count
    }));
  } catch (err) {
    console.error("[getAlerts] error:", err);
    throw err;
  }
}
