export default function ReservationCard(reservation) {
  const { workspace, date, startHour, endHour, reason, status } = reservation;

  const statusStyles = {
    pending: "bg-yellow-100 text-yellow-800",
    approved: "bg-green-100 text-green-800",
    rejected: "bg-red-100 text-red-800",
  };

  const statusClass = statusStyles[status] || "bg-slate-100 text-slate-800";

  return `
    <article class="rounded-lg border border-slate-200 p-4 shadow-sm bg-white">
      <h3 class="font-bold text-lg mb-2">
        ${workspace}
      </h3>

      <div class="space-y-1 text-sm text-slate-700">
        <p>Fecha: ${date}</p>
        <p>Horario: ${startHour} - ${endHour}</p>
        <p>Motivo: ${reason}</p>
        <p>
          Estado:
          <span class="inline-block px-2 py-0.5 rounded-full text-xs font-medium ${statusClass}">
            ${status}
          </span>
        </p>
      </div>
    </article>
  `;
}
