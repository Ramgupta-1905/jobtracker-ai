import ApplicationCard from "./ApplicationCard";

export default function ApplicationsGrid({ applications ,onDelete,onEdit,}) {
  return (
    <section>
      <div className="grid gap-4 p-2 md:grid-cols-2 xl:grid-cols-3">
        {applications.map((application) => (
          <ApplicationCard
            key={application.id}
            application={application}
             onDelete={onDelete}
             onEdit ={onEdit}
          />
        ))}
      </div>
    </section>
  );
}