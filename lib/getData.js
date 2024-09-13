"use server";

import { auth } from "@/auth";

const login = async (credentials) => {
  let response = await fetch(`${process.env.BACK_END_URL}/api/auth/login`, {
    cache: "no-store",
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      'Accept': 'application/json',
    },
    body: JSON.stringify({
      email: credentials.email,
      password: credentials.password,
    }),
  });
  return await response.json();
};

const loginUserData = async () => {
  const session = await auth();
  let response = await fetch(`${process.env.BACK_END_URL}/api/user-data`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      'Accept': 'application/json',
      Authorization: `Bearer ${session?.accessToken}`,
    },
  });
  return await response.json();
};

const getGeneralNotes = async () => {
  const session = await auth();
  let response = await fetch(`${process.env.BACK_END_URL}/api/general-notes`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      'Accept': 'application/json',
      Authorization: `Bearer ${session?.accessToken}`,
    },
  });
  return await response.json();
};

const getAppointmentNotes = async () => {
  const session = await auth();
  let response = await fetch(
    `${process.env.BACK_END_URL}/api/appointment-notes`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        'Accept': 'application/json',
        Authorization: `Bearer ${session?.accessToken}`,
      },
    }
  );
  return await response.json();
};

const getInvoices = async () => {
  const session = await auth();
  let response = await fetch(`${process.env.BACK_END_URL}/api/invoices`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      'Accept': 'application/json',
      Authorization: `Bearer ${session?.accessToken}`,
    },
  });
  return await response.json();
};

const getAppointments = async () => {
  const session = await auth();
  let response = await fetch(`${process.env.BACK_END_URL}/api/appointments`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      'Accept': 'application/json',
      Authorization: `Bearer ${session?.accessToken}`,
    },
  });
  return await response.json();
};

const getUserAnalytics = async (from, to) => {
  const session = await auth();
  let response = await fetch(`${process.env.BACK_END_URL}/api/user-analytics`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      'Accept': 'application/json',
      Authorization: `Bearer ${session?.accessToken}`,
    },
    body: JSON.stringify({from,to}),
  });
  return await response.json();
};

const updateProfileInfo = async (formData) => {
  const session = await auth();
  let response = await fetch(`${process.env.BACK_END_URL}/api/update-profile`, {
    method: "POST",
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      Authorization: `Bearer ${session?.accessToken}`,
    },
    body: JSON.stringify({...formData}),
  });
  return await response.json();
};

export {
  getAppointmentNotes, getAppointments, getGeneralNotes, getInvoices, getUserAnalytics, login,
  loginUserData, updateProfileInfo
};

