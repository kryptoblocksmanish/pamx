import { Component, OnInit } from '@angular/core';


@Component({
    templateUrl: "./listReporting.component.html"
})
export class ListReportingComponent implements OnInit {

    data = [
        {
            x: ['uid', 'file_name', 'keep_file_name', 'data_source_id', 'log_id', 'log_type', 'insert_time', 'remarks', 'no', 'status', 'origin', 'date_of_occurence', 'occurence_machine', 'other_message'],
            y: [111, 125, 152, 121, 121, 189, 121, 144, 114, 124, 197, 132, 143, 135],
            type: 'bar',
            name: 't4'
        }
    ]

    layout = {
        width: 500,
        height: 500,
        title: {
            text: 'Plot'
        },
        xaxis: {
            title:
                { text: 'NUMBERS' }
        },
        yaxis: {
            title:
                { text: 'COUNTS' },
            range: [0, 200]
        }
    }

    public graph = {
        data: this.data,
        layout: this.layout
    };

    ngOnInit() {
    }
}