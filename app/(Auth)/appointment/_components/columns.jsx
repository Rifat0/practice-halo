"use client";

import moment from 'moment';

export const columns = [
  {
    accessorKey: "title",
    header: ({ column }) => {
      return (
        <span className="f-w-600">Title</span>
      );
    },
  },
  {
    accessorKey: "doctor.name",
    header: ({ column }) => {
      return (
        <span
          className="f-w-600"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Doctor <i className="fa fa-sort"></i>
        </span>
      );
    },
  },
  {
    accessorKey: "start",
    header: ({ column }) => {
      return (
        <span className="f-w-600">start</span>
      );
    },
    cell: ({ row }) => {
      const start = moment(row.getValue("start")).format("MMMM D, YYYY");
      return <div>{start}</div>;
    },
  },  
  {
    accessorKey: "end",
    header: ({ column }) => {
      return (
        <span className="f-w-600">end</span>
      );
    },
    cell: ({ row }) => {
      const start = moment(row.getValue("end")).format("MMMM D, YYYY");
      return <div>{start}</div>;
      
    },
  },
  {
    accessorKey: "status",
    header: ({ column }) => {
      return (
        <span
          className="f-w-600"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Status <i className="fa fa-sort"></i>
        </span>
      );
    }
  }
];
