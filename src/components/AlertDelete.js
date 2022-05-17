import React, { useState, useEffect } from "react";
import swal from 'sweetalert';

export const AlertDelete = () => {
    swal({
        title: "Are you sure?",
        text: "Task will be deleted",
        icon: "warning",
        buttons: true,
        dangerMode: true
    })
    .then((willDelete) => {
        console.log(willDelete);
        if ( willDelete ) {
            swal("Poof! Task has been deleted successfully", {
                icon: "success",
            })
            // Aquí llamaré al metodo del TaskService
            .then (res => window.location.href="/")
        }
    });
}
