import { fetchWithAuth } from "@/lib/fetchWithAuth";

import { API_BASE } from "@/lib/apiConfig";


export async function getPermissionCategories(idCategory) {
  const url = new URL(`${API_BASE}/api/Permission/permissions`);
  if (idCategory != null) url.searchParams.set("id_permissionCategory", idCategory);
  const res = await fetchWithAuth(url.toString(), { credentials: "include" });
  if (!res.ok) throw new Error(await res.text());
  return res.json();
}
