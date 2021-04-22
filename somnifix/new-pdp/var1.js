window.onload  = function () {

    let style = `
    <style>
        .flex-center-between {
            display: flex;
            flex-wrap: wrap;
            align-items: center;
            justify-content: space-between;
        }
        .description, .product__images span.stamped-product-reviews-badge.stamped-main-badge, .section.is-width-standard .product_section .product__images .made_in {
            display: none;
        }
        .section {
            max-width: 1250px;
        }
        .one-half {
            width: calc(48% - 20px);
        }
        .product__information.one-half {
            width: calc(52% - 20px);
        }
        #shopify-section-product__main .product__images .stamped-product-reviews-badge {
            display: none!important;
        }
        .shopify-product-form, .product__images  .product_name, .product__images  .stamped-badge, .product__images .checkmark_wrap {
            display: none;
        }
        .product-form_gray {
            background: #F5F6F7;
            border-radius: 10px;
            padding: 17px 20px 38px 20px;
            font-family: 'Roboto', sans-serif;
        }
        .product-form_head {
            display: flex;
            flex-wrap: wrap;
            align-items: center;
            justify-content: space-between;
        }
        .product_name.title {
            margin-bottom: 0;
            font-weight: 800;
            font-style: normal;
            font-size: 32px;
            letter-spacing: 0.005em;
        }
        #shopify-section-product__main .stamped-product-reviews-badge {
            margin-top: 7px;
            padding-bottom: 16px!important;
        }
        .stamped-badge-starrating {
            font-style: normal;
            font-weight: 500;
            font-size: 14px;
            line-height: 16px;
            letter-spacing: 0.03em;
        }
        .stamped-badge-caption {
            font-size: 14px;
            line-height: 16px;
            letter-spacing: 0.03em;
            font-family: 'Roboto', sans-serif;
            padding-left: 7px;
        }
        .stamped-badge-caption span{
            color: #000000;
            margin-left: 5px
        }
        .made_in{
            display: flex;
            align-items: center;
            background: #4090D1;
            border-radius: 5px;
            padding: 0 7px;
            line-height: 26px;
            color: #fff;
            font-style: normal;
            font-weight: 500;
            font-size: 12px;
        }
        .made_in:before {
            content: '';
            width: 22px;
            height: 12px;
            margin-right: 7px;
            background-size: contain;
            background-repeat: no-repeat;
            background-position: center;
            background-image: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTQiIGhlaWdodD0iMTAiIHZpZXdCb3g9IjAgMCAxNCAxMCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPG1hc2sgaWQ9Im1hc2swIiBtYXNrLXR5cGU9ImFscGhhIiBtYXNrVW5pdHM9InVzZXJTcGFjZU9uVXNlIiB4PSIwIiB5PSIwIiB3aWR0aD0iMTQiIGhlaWdodD0iMTAiPgo8cGF0aCBkPSJNMTMgMEgxQzAuNDQ3NzE1IDAgMCAwLjQ0NzcxNSAwIDFWOUMwIDkuNTUyMjggMC40NDc3MTUgMTAgMSAxMEgxM0MxMy41NTIzIDEwIDE0IDkuNTUyMjggMTQgOVYxQzE0IDAuNDQ3NzE1IDEzLjU1MjMgMCAxMyAwWiIgZmlsbD0id2hpdGUiLz4KPC9tYXNrPgo8ZyBtYXNrPSJ1cmwoI21hc2swKSI+CjxwYXRoIGQ9Ik0xMyAwSDFDMC40NDc3MTUgMCAwIDAuNDQ3NzE1IDAgMVY5QzAgOS41NTIyOCAwLjQ0NzcxNSAxMCAxIDEwSDEzQzEzLjU1MjMgMTAgMTQgOS41NTIyOCAxNCA5VjFDMTQgMC40NDc3MTUgMTMuNTUyMyAwIDEzIDBaIiBmaWxsPSJ3aGl0ZSIvPgo8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTE0IDkuMzMzMzNWMTBIMFY5LjMzMzMzSDE0Wk0xNCA4VjguNjY2NjdIMFY4SDE0Wk0xNCA2LjY2NjY3VjcuMzMzMzNIMFY2LjY2NjY3SDE0Wk0xNCA1LjMzMzMzVjZIMFY1LjMzMzMzSDE0Wk0xNCA0VjQuNjY2NjdIMFY0SDE0Wk0xNCAyLjY2NjY3VjMuMzMzMzNIMFYyLjY2NjY3SDE0Wk0xNCAxLjMzMzMzVjJIMFYxLjMzMzMzSDE0Wk0xNCAwVjAuNjY2NjY3SDBWMEgxNFoiIGZpbGw9IiNEMDJGNDQiLz4KPHBhdGggZD0iTTYgMEgwVjQuNjY2NjdINlYwWiIgZmlsbD0iIzQ2NDY3RiIvPgo8ZyBmaWx0ZXI9InVybCgjZmlsdGVyMF9kKSI+CjxwYXRoIGQ9Ik01LjAwMDA4IDMuMzMzMzRDNS4xODQxOCAzLjMzMzM0IDUuMzMzNDIgMy40ODI1OCA1LjMzMzQyIDMuNjY2NjdDNS4zMzM0MiAzLjg1MDc3IDUuMTg0MTggNCA1LjAwMDA4IDRDNC44MTU5OSA0IDQuNjY2NzUgMy44NTA3NyA0LjY2Njc1IDMuNjY2NjdDNC42NjY3NSAzLjQ4MjU4IDQuODE1OTkgMy4zMzMzNCA1LjAwMDA4IDMuMzMzMzRaTTMuNjY2NzUgMy4zMzMzNEMzLjg1MDg0IDMuMzMzMzQgNC4wMDAwOCAzLjQ4MjU4IDQuMDAwMDggMy42NjY2N0M0LjAwMDA4IDMuODUwNzcgMy44NTA4NCA0IDMuNjY2NzUgNEMzLjQ4MjY1IDQgMy4zMzM0MSAzLjg1MDc3IDMuMzMzNDEgMy42NjY2N0MzLjMzMzQxIDMuNDgyNTggMy40ODI2NSAzLjMzMzM0IDMuNjY2NzUgMy4zMzMzNFpNMi4zMzM0MSAzLjMzMzM0QzIuNTE3NTEgMy4zMzMzNCAyLjY2Njc1IDMuNDgyNTggMi42NjY3NSAzLjY2NjY3QzIuNjY2NzUgMy44NTA3NyAyLjUxNzUxIDQgMi4zMzM0MSA0QzIuMTQ5MzIgNCAyLjAwMDA4IDMuODUwNzcgMi4wMDAwOCAzLjY2NjY3QzIuMDAwMDggMy40ODI1OCAyLjE0OTMyIDMuMzMzMzQgMi4zMzM0MSAzLjMzMzM0Wk0xLjAwMDA4IDMuMzMzMzRDMS4xODQxOCAzLjMzMzM0IDEuMzMzNDEgMy40ODI1OCAxLjMzMzQxIDMuNjY2NjdDMS4zMzM0MSAzLjg1MDc3IDEuMTg0MTggNCAxLjAwMDA4IDRDMC44MTU5ODYgNCAwLjY2Njc0OCAzLjg1MDc3IDAuNjY2NzQ4IDMuNjY2NjdDMC42NjY3NDggMy40ODI1OCAwLjgxNTk4NiAzLjMzMzM0IDEuMDAwMDggMy4zMzMzNFpNMS42NjY3NSAyLjY2NjY3QzEuODUwODQgMi42NjY2NyAyLjAwMDA4IDIuODE1OTEgMi4wMDAwOCAzQzIuMDAwMDggMy4xODQxIDEuODUwODQgMy4zMzMzNCAxLjY2Njc1IDMuMzMzMzRDMS40ODI2NSAzLjMzMzM0IDEuMzMzNDEgMy4xODQxIDEuMzMzNDEgM0MxLjMzMzQxIDIuODE1OTEgMS40ODI2NSAyLjY2NjY3IDEuNjY2NzUgMi42NjY2N1pNMy4wMDAwOCAyLjY2NjY3QzMuMTg0MTggMi42NjY2NyAzLjMzMzQxIDIuODE1OTEgMy4zMzM0MSAzQzMuMzMzNDEgMy4xODQxIDMuMTg0MTggMy4zMzMzNCAzLjAwMDA4IDMuMzMzMzRDMi44MTU5OSAzLjMzMzM0IDIuNjY2NzUgMy4xODQxIDIuNjY2NzUgM0MyLjY2Njc1IDIuODE1OTEgMi44MTU5OSAyLjY2NjY3IDMuMDAwMDggMi42NjY2N1pNNC4zMzM0MSAyLjY2NjY3QzQuNTE3NTEgMi42NjY2NyA0LjY2Njc1IDIuODE1OTEgNC42NjY3NSAzQzQuNjY2NzUgMy4xODQxIDQuNTE3NTEgMy4zMzMzNCA0LjMzMzQxIDMuMzMzMzRDNC4xNDkzMiAzLjMzMzM0IDQuMDAwMDggMy4xODQxIDQuMDAwMDggM0M0LjAwMDA4IDIuODE1OTEgNC4xNDkzMiAyLjY2NjY3IDQuMzMzNDEgMi42NjY2N1pNNS4wMDAwOCAyQzUuMTg0MTggMiA1LjMzMzQyIDIuMTQ5MjQgNS4zMzM0MiAyLjMzMzM0QzUuMzMzNDIgMi41MTc0MyA1LjE4NDE4IDIuNjY2NjcgNS4wMDAwOCAyLjY2NjY3QzQuODE1OTkgMi42NjY2NyA0LjY2Njc1IDIuNTE3NDMgNC42NjY3NSAyLjMzMzM0QzQuNjY2NzUgMi4xNDkyNCA0LjgxNTk5IDIgNS4wMDAwOCAyWk0zLjY2Njc1IDJDMy44NTA4NCAyIDQuMDAwMDggMi4xNDkyNCA0LjAwMDA4IDIuMzMzMzRDNC4wMDAwOCAyLjUxNzQzIDMuODUwODQgMi42NjY2NyAzLjY2Njc1IDIuNjY2NjdDMy40ODI2NSAyLjY2NjY3IDMuMzMzNDEgMi41MTc0MyAzLjMzMzQxIDIuMzMzMzRDMy4zMzM0MSAyLjE0OTI0IDMuNDgyNjUgMiAzLjY2Njc1IDJaTTIuMzMzNDEgMkMyLjUxNzUxIDIgMi42NjY3NSAyLjE0OTI0IDIuNjY2NzUgMi4zMzMzNEMyLjY2Njc1IDIuNTE3NDMgMi41MTc1MSAyLjY2NjY3IDIuMzMzNDEgMi42NjY2N0MyLjE0OTMyIDIuNjY2NjcgMi4wMDAwOCAyLjUxNzQzIDIuMDAwMDggMi4zMzMzNEMyLjAwMDA4IDIuMTQ5MjQgMi4xNDkzMiAyIDIuMzMzNDEgMlpNMS4wMDAwOCAyQzEuMTg0MTggMiAxLjMzMzQxIDIuMTQ5MjQgMS4zMzM0MSAyLjMzMzM0QzEuMzMzNDEgMi41MTc0MyAxLjE4NDE4IDIuNjY2NjcgMS4wMDAwOCAyLjY2NjY3QzAuODE1OTg2IDIuNjY2NjcgMC42NjY3NDggMi41MTc0MyAwLjY2Njc0OCAyLjMzMzM0QzAuNjY2NzQ4IDIuMTQ5MjQgMC44MTU5ODYgMiAxLjAwMDA4IDJaTTEuNjY2NzUgMS4zMzMzNEMxLjg1MDg0IDEuMzMzMzQgMi4wMDAwOCAxLjQ4MjU4IDIuMDAwMDggMS42NjY2N0MyLjAwMDA4IDEuODUwNzcgMS44NTA4NCAyIDEuNjY2NzUgMkMxLjQ4MjY1IDIgMS4zMzM0MSAxLjg1MDc3IDEuMzMzNDEgMS42NjY2N0MxLjMzMzQxIDEuNDgyNTggMS40ODI2NSAxLjMzMzM0IDEuNjY2NzUgMS4zMzMzNFpNMy4wMDAwOCAxLjMzMzM0QzMuMTg0MTggMS4zMzMzNCAzLjMzMzQxIDEuNDgyNTggMy4zMzM0MSAxLjY2NjY3QzMuMzMzNDEgMS44NTA3NyAzLjE4NDE4IDIgMy4wMDAwOCAyQzIuODE1OTkgMiAyLjY2Njc1IDEuODUwNzcgMi42NjY3NSAxLjY2NjY3QzIuNjY2NzUgMS40ODI1OCAyLjgxNTk5IDEuMzMzMzQgMy4wMDAwOCAxLjMzMzM0Wk00LjMzMzQxIDEuMzMzMzRDNC41MTc1MSAxLjMzMzM0IDQuNjY2NzUgMS40ODI1OCA0LjY2Njc1IDEuNjY2NjdDNC42NjY3NSAxLjg1MDc3IDQuNTE3NTEgMiA0LjMzMzQxIDJDNC4xNDkzMiAyIDQuMDAwMDggMS44NTA3NyA0LjAwMDA4IDEuNjY2NjdDNC4wMDAwOCAxLjQ4MjU4IDQuMTQ5MzIgMS4zMzMzNCA0LjMzMzQxIDEuMzMzMzRaTTEuMDAwMDggMC42NjY2NzJDMS4xODQxOCAwLjY2NjY3MiAxLjMzMzQxIDAuODE1OTEgMS4zMzM0MSAxLjAwMDAxQzEuMzMzNDEgMS4xODQxIDEuMTg0MTggMS4zMzMzNCAxLjAwMDA4IDEuMzMzMzRDMC44MTU5ODYgMS4zMzMzNCAwLjY2Njc0OCAxLjE4NDEgMC42NjY3NDggMS4wMDAwMUMwLjY2Njc0OCAwLjgxNTkxIDAuODE1OTg2IDAuNjY2NjcyIDEuMDAwMDggMC42NjY2NzJaTTIuMzMzNDEgMC42NjY2NzJDMi41MTc1MSAwLjY2NjY3MiAyLjY2Njc1IDAuODE1OTEgMi42NjY3NSAxLjAwMDAxQzIuNjY2NzUgMS4xODQxIDIuNTE3NTEgMS4zMzMzNCAyLjMzMzQxIDEuMzMzMzRDMi4xNDkzMiAxLjMzMzM0IDIuMDAwMDggMS4xODQxIDIuMDAwMDggMS4wMDAwMUMyLjAwMDA4IDAuODE1OTEgMi4xNDkzMiAwLjY2NjY3MiAyLjMzMzQxIDAuNjY2NjcyWk0zLjY2Njc1IDAuNjY2NjcyQzMuODUwODQgMC42NjY2NzIgNC4wMDAwOCAwLjgxNTkxIDQuMDAwMDggMS4wMDAwMUM0LjAwMDA4IDEuMTg0MSAzLjg1MDg0IDEuMzMzMzQgMy42NjY3NSAxLjMzMzM0QzMuNDgyNjUgMS4zMzMzNCAzLjMzMzQxIDEuMTg0MSAzLjMzMzQxIDEuMDAwMDFDMy4zMzM0MSAwLjgxNTkxIDMuNDgyNjUgMC42NjY2NzIgMy42NjY3NSAwLjY2NjY3MlpNNS4wMDAwOCAwLjY2NjY3MkM1LjE4NDE4IDAuNjY2NjcyIDUuMzMzNDIgMC44MTU5MSA1LjMzMzQyIDEuMDAwMDFDNS4zMzM0MiAxLjE4NDEgNS4xODQxOCAxLjMzMzM0IDUuMDAwMDggMS4zMzMzNEM0LjgxNTk5IDEuMzMzMzQgNC42NjY3NSAxLjE4NDEgNC42NjY3NSAxLjAwMDAxQzQuNjY2NzUgMC44MTU5MSA0LjgxNTk5IDAuNjY2NjcyIDUuMDAwMDggMC42NjY2NzJaIiBmaWxsPSJibGFjayIvPgo8L2c+CjxwYXRoIGQ9Ik01LjAwMDA4IDMuMzMzMzRDNS4xODQxOCAzLjMzMzM0IDUuMzMzNDIgMy40ODI1OCA1LjMzMzQyIDMuNjY2NjdDNS4zMzM0MiAzLjg1MDc3IDUuMTg0MTggNCA1LjAwMDA4IDRDNC44MTU5OSA0IDQuNjY2NzUgMy44NTA3NyA0LjY2Njc1IDMuNjY2NjdDNC42NjY3NSAzLjQ4MjU4IDQuODE1OTkgMy4zMzMzNCA1LjAwMDA4IDMuMzMzMzRaTTMuNjY2NzUgMy4zMzMzNEMzLjg1MDg0IDMuMzMzMzQgNC4wMDAwOCAzLjQ4MjU4IDQuMDAwMDggMy42NjY2N0M0LjAwMDA4IDMuODUwNzcgMy44NTA4NCA0IDMuNjY2NzUgNEMzLjQ4MjY1IDQgMy4zMzM0MSAzLjg1MDc3IDMuMzMzNDEgMy42NjY2N0MzLjMzMzQxIDMuNDgyNTggMy40ODI2NSAzLjMzMzM0IDMuNjY2NzUgMy4zMzMzNFpNMi4zMzM0MSAzLjMzMzM0QzIuNTE3NTEgMy4zMzMzNCAyLjY2Njc1IDMuNDgyNTggMi42NjY3NSAzLjY2NjY3QzIuNjY2NzUgMy44NTA3NyAyLjUxNzUxIDQgMi4zMzM0MSA0QzIuMTQ5MzIgNCAyLjAwMDA4IDMuODUwNzcgMi4wMDAwOCAzLjY2NjY3QzIuMDAwMDggMy40ODI1OCAyLjE0OTMyIDMuMzMzMzQgMi4zMzM0MSAzLjMzMzM0Wk0xLjAwMDA4IDMuMzMzMzRDMS4xODQxOCAzLjMzMzM0IDEuMzMzNDEgMy40ODI1OCAxLjMzMzQxIDMuNjY2NjdDMS4zMzM0MSAzLjg1MDc3IDEuMTg0MTggNCAxLjAwMDA4IDRDMC44MTU5ODYgNCAwLjY2Njc0OCAzLjg1MDc3IDAuNjY2NzQ4IDMuNjY2NjdDMC42NjY3NDggMy40ODI1OCAwLjgxNTk4NiAzLjMzMzM0IDEuMDAwMDggMy4zMzMzNFpNMS42NjY3NSAyLjY2NjY3QzEuODUwODQgMi42NjY2NyAyLjAwMDA4IDIuODE1OTEgMi4wMDAwOCAzQzIuMDAwMDggMy4xODQxIDEuODUwODQgMy4zMzMzNCAxLjY2Njc1IDMuMzMzMzRDMS40ODI2NSAzLjMzMzM0IDEuMzMzNDEgMy4xODQxIDEuMzMzNDEgM0MxLjMzMzQxIDIuODE1OTEgMS40ODI2NSAyLjY2NjY3IDEuNjY2NzUgMi42NjY2N1pNMy4wMDAwOCAyLjY2NjY3QzMuMTg0MTggMi42NjY2NyAzLjMzMzQxIDIuODE1OTEgMy4zMzM0MSAzQzMuMzMzNDEgMy4xODQxIDMuMTg0MTggMy4zMzMzNCAzLjAwMDA4IDMuMzMzMzRDMi44MTU5OSAzLjMzMzM0IDIuNjY2NzUgMy4xODQxIDIuNjY2NzUgM0MyLjY2Njc1IDIuODE1OTEgMi44MTU5OSAyLjY2NjY3IDMuMDAwMDggMi42NjY2N1pNNC4zMzM0MSAyLjY2NjY3QzQuNTE3NTEgMi42NjY2NyA0LjY2Njc1IDIuODE1OTEgNC42NjY3NSAzQzQuNjY2NzUgMy4xODQxIDQuNTE3NTEgMy4zMzMzNCA0LjMzMzQxIDMuMzMzMzRDNC4xNDkzMiAzLjMzMzM0IDQuMDAwMDggMy4xODQxIDQuMDAwMDggM0M0LjAwMDA4IDIuODE1OTEgNC4xNDkzMiAyLjY2NjY3IDQuMzMzNDEgMi42NjY2N1pNNS4wMDAwOCAyQzUuMTg0MTggMiA1LjMzMzQyIDIuMTQ5MjQgNS4zMzM0MiAyLjMzMzM0QzUuMzMzNDIgMi41MTc0MyA1LjE4NDE4IDIuNjY2NjcgNS4wMDAwOCAyLjY2NjY3QzQuODE1OTkgMi42NjY2NyA0LjY2Njc1IDIuNTE3NDMgNC42NjY3NSAyLjMzMzM0QzQuNjY2NzUgMi4xNDkyNCA0LjgxNTk5IDIgNS4wMDAwOCAyWk0zLjY2Njc1IDJDMy44NTA4NCAyIDQuMDAwMDggMi4xNDkyNCA0LjAwMDA4IDIuMzMzMzRDNC4wMDAwOCAyLjUxNzQzIDMuODUwODQgMi42NjY2NyAzLjY2Njc1IDIuNjY2NjdDMy40ODI2NSAyLjY2NjY3IDMuMzMzNDEgMi41MTc0MyAzLjMzMzQxIDIuMzMzMzRDMy4zMzM0MSAyLjE0OTI0IDMuNDgyNjUgMiAzLjY2Njc1IDJaTTIuMzMzNDEgMkMyLjUxNzUxIDIgMi42NjY3NSAyLjE0OTI0IDIuNjY2NzUgMi4zMzMzNEMyLjY2Njc1IDIuNTE3NDMgMi41MTc1MSAyLjY2NjY3IDIuMzMzNDEgMi42NjY2N0MyLjE0OTMyIDIuNjY2NjcgMi4wMDAwOCAyLjUxNzQzIDIuMDAwMDggMi4zMzMzNEMyLjAwMDA4IDIuMTQ5MjQgMi4xNDkzMiAyIDIuMzMzNDEgMlpNMS4wMDAwOCAyQzEuMTg0MTggMiAxLjMzMzQxIDIuMTQ5MjQgMS4zMzM0MSAyLjMzMzM0QzEuMzMzNDEgMi41MTc0MyAxLjE4NDE4IDIuNjY2NjcgMS4wMDAwOCAyLjY2NjY3QzAuODE1OTg2IDIuNjY2NjcgMC42NjY3NDggMi41MTc0MyAwLjY2Njc0OCAyLjMzMzM0QzAuNjY2NzQ4IDIuMTQ5MjQgMC44MTU5ODYgMiAxLjAwMDA4IDJaTTEuNjY2NzUgMS4zMzMzNEMxLjg1MDg0IDEuMzMzMzQgMi4wMDAwOCAxLjQ4MjU4IDIuMDAwMDggMS42NjY2N0MyLjAwMDA4IDEuODUwNzcgMS44NTA4NCAyIDEuNjY2NzUgMkMxLjQ4MjY1IDIgMS4zMzM0MSAxLjg1MDc3IDEuMzMzNDEgMS42NjY2N0MxLjMzMzQxIDEuNDgyNTggMS40ODI2NSAxLjMzMzM0IDEuNjY2NzUgMS4zMzMzNFpNMy4wMDAwOCAxLjMzMzM0QzMuMTg0MTggMS4zMzMzNCAzLjMzMzQxIDEuNDgyNTggMy4zMzM0MSAxLjY2NjY3QzMuMzMzNDEgMS44NTA3NyAzLjE4NDE4IDIgMy4wMDAwOCAyQzIuODE1OTkgMiAyLjY2Njc1IDEuODUwNzcgMi42NjY3NSAxLjY2NjY3QzIuNjY2NzUgMS40ODI1OCAyLjgxNTk5IDEuMzMzMzQgMy4wMDAwOCAxLjMzMzM0Wk00LjMzMzQxIDEuMzMzMzRDNC41MTc1MSAxLjMzMzM0IDQuNjY2NzUgMS40ODI1OCA0LjY2Njc1IDEuNjY2NjdDNC42NjY3NSAxLjg1MDc3IDQuNTE3NTEgMiA0LjMzMzQxIDJDNC4xNDkzMiAyIDQuMDAwMDggMS44NTA3NyA0LjAwMDA4IDEuNjY2NjdDNC4wMDAwOCAxLjQ4MjU4IDQuMTQ5MzIgMS4zMzMzNCA0LjMzMzQxIDEuMzMzMzRaTTEuMDAwMDggMC42NjY2NzJDMS4xODQxOCAwLjY2NjY3MiAxLjMzMzQxIDAuODE1OTEgMS4zMzM0MSAxLjAwMDAxQzEuMzMzNDEgMS4xODQxIDEuMTg0MTggMS4zMzMzNCAxLjAwMDA4IDEuMzMzMzRDMC44MTU5ODYgMS4zMzMzNCAwLjY2Njc0OCAxLjE4NDEgMC42NjY3NDggMS4wMDAwMUMwLjY2Njc0OCAwLjgxNTkxIDAuODE1OTg2IDAuNjY2NjcyIDEuMDAwMDggMC42NjY2NzJaTTIuMzMzNDEgMC42NjY2NzJDMi41MTc1MSAwLjY2NjY3MiAyLjY2Njc1IDAuODE1OTEgMi42NjY3NSAxLjAwMDAxQzIuNjY2NzUgMS4xODQxIDIuNTE3NTEgMS4zMzMzNCAyLjMzMzQxIDEuMzMzMzRDMi4xNDkzMiAxLjMzMzM0IDIuMDAwMDggMS4xODQxIDIuMDAwMDggMS4wMDAwMUMyLjAwMDA4IDAuODE1OTEgMi4xNDkzMiAwLjY2NjY3MiAyLjMzMzQxIDAuNjY2NjcyWk0zLjY2Njc1IDAuNjY2NjcyQzMuODUwODQgMC42NjY2NzIgNC4wMDAwOCAwLjgxNTkxIDQuMDAwMDggMS4wMDAwMUM0LjAwMDA4IDEuMTg0MSAzLjg1MDg0IDEuMzMzMzQgMy42NjY3NSAxLjMzMzM0QzMuNDgyNjUgMS4zMzMzNCAzLjMzMzQxIDEuMTg0MSAzLjMzMzQxIDEuMDAwMDFDMy4zMzM0MSAwLjgxNTkxIDMuNDgyNjUgMC42NjY2NzIgMy42NjY3NSAwLjY2NjY3MlpNNS4wMDAwOCAwLjY2NjY3MkM1LjE4NDE4IDAuNjY2NjcyIDUuMzMzNDIgMC44MTU5MSA1LjMzMzQyIDEuMDAwMDFDNS4zMzM0MiAxLjE4NDEgNS4xODQxOCAxLjMzMzM0IDUuMDAwMDggMS4zMzMzNEM0LjgxNTk5IDEuMzMzMzQgNC42NjY3NSAxLjE4NDEgNC42NjY3NSAxLjAwMDAxQzQuNjY2NzUgMC44MTU5MSA0LjgxNTk5IDAuNjY2NjcyIDUuMDAwMDggMC42NjY2NzJaIiBmaWxsPSJ1cmwoI3BhaW50MF9saW5lYXIpIi8+CjwvZz4KPGRlZnM+CjxmaWx0ZXIgaWQ9ImZpbHRlcjBfZCIgeD0iLTMuMzMzMjUiIHk9Ii0yLjMzMzMzIiB3aWR0aD0iMTIuNjY2NyIgaGVpZ2h0PSIxMS4zMzMzIiBmaWx0ZXJVbml0cz0idXNlclNwYWNlT25Vc2UiIGNvbG9yLWludGVycG9sYXRpb24tZmlsdGVycz0ic1JHQiI+CjxmZUZsb29kIGZsb29kLW9wYWNpdHk9IjAiIHJlc3VsdD0iQmFja2dyb3VuZEltYWdlRml4Ii8+CjxmZUNvbG9yTWF0cml4IGluPSJTb3VyY2VBbHBoYSIgdHlwZT0ibWF0cml4IiB2YWx1ZXM9IjAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDEyNyAwIi8+CjxmZU9mZnNldCBkeT0iMSIvPgo8ZmVHYXVzc2lhbkJsdXIgc3RkRGV2aWF0aW9uPSIyIi8+CjxmZUNvbG9yTWF0cml4IHR5cGU9Im1hdHJpeCIgdmFsdWVzPSIwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwLjA2IDAiLz4KPGZlQmxlbmQgbW9kZT0ibm9ybWFsIiBpbjI9IkJhY2tncm91bmRJbWFnZUZpeCIgcmVzdWx0PSJlZmZlY3QxX2Ryb3BTaGFkb3ciLz4KPGZlQmxlbmQgbW9kZT0ibm9ybWFsIiBpbj0iU291cmNlR3JhcGhpYyIgaW4yPSJlZmZlY3QxX2Ryb3BTaGFkb3ciIHJlc3VsdD0ic2hhcGUiLz4KPC9maWx0ZXI+CjxsaW5lYXJHcmFkaWVudCBpZD0icGFpbnQwX2xpbmVhciIgeDE9IjMuMDAwMDgiIHkxPSIwLjY2NjY3MiIgeDI9IjMuMDAwMDgiIHkyPSI0IiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+CjxzdG9wIHN0b3AtY29sb3I9IndoaXRlIi8+CjxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iI0YwRjBGMCIvPgo8L2xpbmVhckdyYWRpZW50Pgo8L2RlZnM+Cjwvc3ZnPgo=);
        } 
        .flex-align-center {
            display: flex;
            align-items: center;
        }
        .product-price {
            margin-right: 24px;
            margin-bottom: 0!important;
        }
        .product-price span{
            font-family: 'Roboto', sans-serif;
            font-style: normal;
            font-weight: 800;
            font-size: 32px;
            line-height: 32px;
            color: #1E415F;
        }
        .product-form_gray .on-free-shipping-label {
            background: #4090D1;
            border-radius: 5px;
            line-height: 26px;
            font-style: normal;
            font-weight: 500;
            font-size: 12px;
            color: #FFFFFF;
            padding: 0 8px;
        }
        .product-arrives p{
            font-size: 14px;
            line-height: 16px;
            color: #1E415F;
        }
        .product-arrives span {
            font-weight: bold;
            margin-left: 10px;
        }
        .product-info {
            border-top: 1px solid #fff;
            border-bottom: 1px solid #fff;
            margin: 25px 0 20px;
            padding: 10px 0;
            display: flex;
            justify-content: space-between;
        }
        .product-info_item {
            font-size: 14px;
            line-height: 158.19%;
            color: #1E415F;
            position: relative;
            /* padding-left: 21px; */
        }
        .product-info_item:before {
            content: '';
            width: 11px;
            height: 8px;
            margin-right: 10px;
            background: #000;
        }
        .advantages li {
            font-size: 14px;
            line-height: 158.19%;
            color: #1E415F;
            padding-left: 22px;
            position: relative;
        }
        .advantages li:before {
            content: '';
            position: absolute;
            left: 0;
            top: 50%;
            transform: translateY(-50%);
            width: 11px;
            height: 8px;
            background: url(https://i.ibb.co/KLDkYYh/check.png) no-repeat center / contain;
            z-index: 1;
        }
        .product-info_right {
            text-align: right;
            font-size: 14px;
            line-height: 16px;
            color: #1E415F;
        }
        .product-info_right p.c-green {
            font-weight: bold;
            font-size: 16px;
            line-height: 19px;
            margin-bottom: 12px;
            color: #29C470;
        }
        .select2.select:not(.is-multiple){
            height: auto;
        }
        .select2 select{
            border-radius: 5px;
            font-size: 14px;
            line-height: 24px;
            height: auto;
        }
        .message-block {
            display: none;
            flex-wrap: wrap;
            justify-content: space-between;
            align-items: center;
            background: #FEF7E7;
            border: 1px solid #F2B413;
            box-sizing: border-box;
            border-radius: 10px;
            padding: 19px 20px;
            margin-bottom: 35px;
        }
        .message-block p {
            font-size: 12px;
            line-height: 17px;
            color: #1E415F;
        }
        .message-block_checbox {
            font-weight: 500;
            font-size: 14px;
            line-height: 16px;
            color: #1E415F;
            display: flex;
            align-items: center;
        }
        .message-block_checbox .c-orange {
            color: #F27113;
        }
        .message-block_checbox .checkbox {
            display: none;
        }  
        .check {
            background: #FFFFFF;
            border: 1px solid #1E415F;
            border-radius: 5px;
            margin-right: 8px;
            display: block;
            width: 20px;
            height: 20px;
            background-size: 70%;
            background-repeat: no-repeat;
            background-position: center;
        }
        .message-block_checbox .checkbox:checked ~ .check{
            background-image: url(https://i.ibb.co/KLDkYYh/check.png);
        }
        .guarantee {
            display: flex;
            align-items: center;
            font-weight: 500;
            color: #1E415F;
        }
        .guarantee p {
            line-height: 126.19%;
        }
        .guarantee img {
            width: 92px;
            height: 76px;
            margin-right: 10px;
        }
        .product-bottom {
            padding: 24px 15px;
            display: flex;
            flex-wrap: wrap;
            align-items: center;
            justify-content: space-between;
        }
        .checkmark_wrap {
            display: block;
        }
        .checkmark_wrap .checkmark_ico {
            width: 15px;
            height: 15px;
            border-width: 1px;
        }
        .checkmark_wrap .checkmark_title {
            font-size: 12px;
            padding: 0 13px 0 8px;
        }
        .checkmark_wrap .checkmark_item {
            display: flex;
            align-items: center;
            width: 100%;
            text-align: left;
            margin-bottom: 10px;
        }
        .checkmark_wrap .checkmark_ico {
            margin: 0;
        }
        
        .checkmark_wrap .checkmark_ico:before {
            height: 10px;
            top: 2px;
            right: 4px;
            transform: rotate(45deg) scale(0.7);
        }
        .checkmark_wrap .checkmark_ico:after {
            height: 6px;
            left: 3px;
            top: 5px;
            transform: rotate(-45deg) scale(0.7);
        }
        .tooltip-container {
            margin: 0;
        }
        .select-choose {
            position: relative;
            margin-bottom: 22px;
            width: 100%;
        }
        .select-choose__current {
            padding: 20px 88px;
            font-family: 'Roboto', sans-serif;
            font-style: normal;
            font-weight: bold;
            font-size: 14px;
            line-height: 16px;
            position: relative;
            color: #1E415F;
            transition: all 0.3s ease;
            background: #F1F7FC;
            border: 2px solid #4090D1;
            border-radius: 10px;
            z-index: 6;
        }
        .select-choose__current:before {
            content: 'Pack size:';
            position: absolute;
            left: 20px;
            top: 50%;
            transform: translateY(-50%);
            font-family: 'Roboto', sans-serif;
            font-style: normal;
            font-weight: normal;
            font-size: 14px;
            line-height: 16px;
            color: rgba(30, 65, 95, 0.99);
            z-index: 2;
            pointer-events: none;
        }
        
        .select-choose__current:after {
            content: '';
            position: absolute;
            right: 20px;
            top: 50%;
            transform: translateY(-50%);
            background: url(https://i.ibb.co/q1JTSNQ/expand-more-24px.png) no-repeat center / contain;
            width: 12px; 
            height: 7px;
        }
        .select-choose__dropdown {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%; 
            z-index: 5;
            padding: 0 15px;
            background: #FFFFFF;
            border-radius: 10px;
            transition: all 0.3s ease;
            height: 0;
            overflow-y: auto;
        }
        
        .select-choose.active .select-choose__current {
            border-color: transparent;
            background-color: #fff;
        }
        
        .select-choose.active .select-choose__dropdown {
            height: 340px;
            padding: 65px 15px 35px;
        }
        .select-choose .top-label, .select-choose .on-icon, .select-choose .weeks-label, .select-choose .best-label {
            display: none!important;
         }
         .choose-pack {
            background: #4090D1;
            border-radius: 32px;
            line-height: 40px;
            font-weight: bold;
            font-size: 14px;
            text-transform: uppercase;
            padding: 0 32px;
            color: #FFFFFF;
            margin: 35px auto 0;
            display: block;
            width: fit-content;
            border: none;
        }
        .on-desktop-show {
            display: flex;
            flex-direction: column;
        }
        .on-desktop-show .on-title {
            order: 3;
        }
        .on-desktop-show .on-title-details {
            order: 4;
        }
        .section.is-width-standard .select-choose__dropdown .swatch .save-label {
            background: rgba(242, 113, 19, 0.29);
            border-radius: 2px;
            padding: 0 11px;
            font-weight: bold;
            font-size: 11px;
            line-height: 20px;
            text-align: center;
            letter-spacing: -0.02em;
            color: #F27113;
            order: 1;
        }
        .section.is-width-standard .select-choose__dropdown .swatch img {
            order: 2;
            height: 81px;
            object-fit: contain;
        }
        .new-price-label, .old-price-label {
            display: none!important;
        }
        .row-price-label {
            display: flex ;
            align-items: center;
            justify-content: center;
            order: 4;
        }
        .row-price-label .new-price-label, .row-price-label .old-price-label {
            display: block!important;
        }
        .product_section .select-choose .swatch label.on-variant-label .on-title-details {
            margin-top: 0;
            margin-bottom: 10px;
        }
        .section.is-width-standard .product_section .select-choose .swatch label.on-variant-label .on-title {
            font-size: 18px;
            line-height: 21px;
            margin-top: 15px;
        }
        .section.is-width-standard .select-choose .swatch .old-price-label {
            font-size: 12px;
            line-height: 14px;
            letter-spacing: 0.05em;
            color: rgba(30, 65, 95, 0.7);
            margin: 0 0 0 15px!important;
        }
        .section.is-width-standard .select-choose .swatch .new-price-label{
            font-weight: 900;
            font-size: 16px;
            line-height: 19px;
            letter-spacing: 0.005em;
        }
        .section.is-width-standard .product_section .select-choose .swatch label.on-variant-label {
            padding: 20px 5px;
        }
        .section.is-width-standard .product_section .select-choose .swatch .swatch-element{
            background: rgba(196, 196, 196, 0.02);
            border: 1px dashed #4090D1;
            position: relative;
        }
        .section.is-width-standard .product_section .select-choose .swatch .swatch-element:before{
            content: '';
            pointer-events: none;
            background: rgba(255, 255, 255, 0.2);
            width: 100%;
            height: 100%;
            position: absolute;
            left: 0;
            top: 0;
            z-index: 2;
        }
        .section.is-width-standard .product_section .select-choose .swatch_options input:checked+.swatch-element:before {
            content: none;
        }
        .purchase-details {
            width: 100%;
            padding: 0;
        }
        .button__add-to-cart {
            border: none;
            height: auto;
            background: #1E415F;
            padding: 0;
            border-radius: 100px;
            line-height: 46px;
            font-weight: bold;
            font-size: 16px;
            text-align: center;
            text-transform: uppercase;
            color: #FFFFFF;
            width: 100%;
            margin-top: 5px;
        }
        .button__add-to-cart:hover {
            color: #FFFFFF;
        }
        .align-items-center {
            display: flex;
            align-items: center;
        }
        .select-country {
            margin-bottom: 13px;
        }
        .select-country select{
            background-color: transparent;
            text-align: right;
            border: none;
            outline: none;
            max-width: 112px;
            margin-left: auto;
            font-family: 'Roboto', sans-serif;
            font-style: normal;
            font-weight: 500;
            font-size: 13px;
            line-height: 11px;
            text-decoration-line: underline;
            color: #1E415F;
    
        } 
        .select-country {
            display: flex;
            align-items: center;
        }
        .select-country p {
            font-style: normal;
            font-weight: normal;
            font-size: 14px;
            line-height: 16px;
            color: #1E4670;
            margin-right: 7px;
        }
        .product-info_right .pack-val {
            font-size: 14px;
            line-height: 16px;
            margin-top: 5px;
        }
        .swatch_options {
            margin-bottom: 0;
        }
        @media only screen and (max-width : 1199px){
            .section.is-width-standard .product_section .select-choose .swatch label.on-variant-label .on-title {
                font-size: 16px;
                line-height: 18px;
            }
        }
    </style>
    `
    
    document.body.insertAdjacentHTML('afterbegin', style);
    
    const productName = document.querySelector('.product_name').innerHTML,
          swatchOptions  = document.querySelector('.swatch_options').innerHTML,
          currentPrice = document.querySelector('.modal_price.subtitle').innerHTML,
          freeShippingLabel = document.querySelector('.on-free-shipping-label').innerHTML,
          onSelect = document.querySelector('.on-select').innerHTML,
          checkmarkWrap = document.querySelector('.checkmark_wrap').innerHTML;
    
    const newElementProductRight= document.createElement('div');
    newElementProductRight.className = 'product__right active';
    
    var variantImportant = document.querySelectorAll('.on-variant-label')[0].dataset.variant;
    
    document.querySelectorAll('.on-pack-wrapper-1 .on-count');
    newElementProductRight.innerHTML = `
        <div class="product-form_gray">
            <div class="product-form_head">
                <h1 class="product_name title">${productName}</h1>
                <div class="made_in">Made in USA</div>
            </div>
            <div class="product-review"> </div>
            <div class="select-choose">
                <div class="select-choose__current">4-week pack (28 strips)</div>
                <div class="select-choose__dropdown">
                    <div class="swatch_options collection_swatches">
                        ${swatchOptions}
                    </div>
                </div>
            </div>
            <div class="flex-center-between">
                <div class="align-items-center">
                    <p class="modal_price subtitle product-price">${currentPrice}</p>
                    <div class="on-free-shipping-label">${freeShippingLabel}</div>
                </div>
                <div>
                    <div class="select-country">
                        <p>Ship to:  </p>
                        <select  name="qauntry">${onSelect}</select>
                    </div>
                    <div class="product-arrives ">
                        <p>Arrives: 
                            <span class="on-date-text">24 Sep - 26 Sep</span>
                        </p>
                    </div>
                </div>
              
            </div>
        
            <div class="product-info">
                <ul class="advantages">
                    <li>Promote nose breathing</li>
                    <li>Reduce open-mouth snoring</li>
                    <li>Boost CPAP experience </li>
                    <li>Improve sleep quality</li>
                </ul>
                    <div class="product-info_right">
                    <p class="c-green">In Stock.</p>
                    <div class="select select2" >
                        <select data-price="21.99" data-strips="28">
                            <option value="Qty: 1" data-pack="1" selected>Qty: 1</option>
                            <option value="Qty: 2" data-pack="2" >Qty: 2</option>
                            <option value="Qty: 3" data-pack="3" >Qty: 3</option>
                            <option value="Qty: 4" data-pack="4" >Qty: 4</option>
                            <option value="Qty: 5" data-pack="5" >Qty: 5</option>
                            <option value="Qty: 6" data-pack="6" >Qty: 6</option>
                            <option value="Qty: 7" data-pack="7" >Qty: 7</option>
                        </select>
                    </div>
                    <p class="pack-val">
                        <span class="pack-val-item">1 pack = </span>
                        <span class="pack-val-strips"> 28 strips</span>
                    
                    </p>
                </div>
            </div>
            <div class="message-block">
                <label class="message-block_checbox">
                    <input type="checkbox" class="checkbox">
                    <span class="check"></span>
                    <span> Subscribe and
                        <span class="c-orange"> save 10%</span>
                    </span>
                </label>
                <p>Auto delivery every 3 month for $49.97. Cancel anytime.</p>
            </div>
            <button type="button" class="button button__add-to-cart" data-variant=${variantImportant} data-pack="1"><span class="text-no-change">Add to cart</span></button>
        </div>
        <div class="product-bottom">
            <div class="checkmark_wrap mobile-hide">
                ${checkmarkWrap}
            </div>
            <div class="guarantee">
                <img src="https://i.ibb.co/xYhDccL/image-44.png" alt="logo Guarantee">
                <p>30-day <br/>Money-Back <br/>Guarantee</p>
            </div>
        </div>
    `
    
    
    document.querySelectorAll('.product-form-container').forEach(function (item) {
        item.appendChild(newElementProductRight);
    });
    
    // added product reviews
    document.querySelector('.product-review').appendChild(document.querySelector('.stamped-product-reviews-badge'));
    
    // toggle classList select
    document.querySelector('.select-choose__current').addEventListener('click', (e) => {
        e.target.parentNode.classList.toggle('active');
        window.dataLayer = window.dataLayer || [];
        dataLayer.push({
            'event': 'event-to-ga',
            'eventCategory': 'Exp — New PDP (Variant 2/B)',
            'eventAction': 'click on button Pack size'
        });
    });
    
    // record - value selected
    document.querySelector('.select2 select').addEventListener('change', function (event) {
        let pack = event.target.options[event.target.selectedIndex].dataset.pack,
            strips = this.dataset.strips,
            price = this.dataset.price,
            multy = pack * price,
            stripsMulty = pack * strips;
    
        document.querySelector('.pack-val-item').innerHTML = `${pack} pack = `; 
        document.querySelector('.product-price .money').innerHTML = `$${multy.toFixed(2)} USD`; 
        document.querySelector('.button__add-to-cart').dataset.pack = pack;
        document.querySelector('.pack-val-strips').innerHTML =`${stripsMulty} strips`;

        window.dataLayer = window.dataLayer || [];
        dataLayer.push({
            'event': 'event-to-ga',
            'eventCategory': 'Exp — New PDP (Variant 2/B)',
            'eventAction': 'click on select — quantity'
        });
    });

    document.querySelectorAll('.save-label').forEach((item) => {
        if (item.innerHTML == 'One-Time'){
            item.style.opacity = '0';
        }
    });
 
    //add data-id and data-save in swatch element
    var arrId = ['0','31272810676339','32190023958643'];
    var arrSave = ['0','49.97','199.97'];
      
    var els = document.querySelectorAll('.select-choose .swatch-element');
    for (let i = 0; i < els.length; i++) {
        els[i].setAttribute("data-id", arrId[i]);
        els[i].setAttribute("data-save", arrSave[i]);
    }
  

    // selected swatch-element 
    document.querySelectorAll('.swatch-element').forEach(function (item) {
        if (item.previousElementSibling.checked) {
            let price = item.querySelector('.row-price-label .new-price-label').innerHTML;
            document.querySelector('.product-price .money').innerHTML = `${price} USD`;
        }
        item.addEventListener('click', () => {
            window.dataLayer = window.dataLayer || [];
            if (item.dataset.value == '1 Pack') {
                dataLayer.push({
                    'event': 'event-to-ga',
                    'eventCategory': 'Exp — New PDP (Variant 2/B)',
                    'eventAction': 'click on button 4-week pack',
                    'eventLabel': 'Dropdown: Pack size'
                });
            } 
            if (item.dataset.value == '3 Pack') {
                document.querySelector('.message-block p').innerHTML = ` Auto delivery every 3 month for $${item.dataset.save}. Cancel anytime.`; 
                dataLayer.push({
                    'event': 'event-to-ga',
                    'eventCategory': 'Exp — New PDP (Variant 2/B)',
                    'eventAction': 'click on button 12-week pack',
                    'eventLabel': 'Dropdown: Pack size'
                });
            }
            if (item.dataset.value == '12 Pack') {
                document.querySelector('.message-block p').innerHTML = ` Auto delivery every 12 month for $${item.dataset.save}. Cancel anytime.`; 
                dataLayer.push({
                    'event': 'event-to-ga',
                    'eventCategory': 'Exp — New PDP (Variant 2/B)',
                    'eventAction': 'click on button 12-month pack',
                    'eventLabel': 'Dropdown: Pack size'
                });
            }
            let childValue = item.querySelector('.new-price-label').innerHTML,
                title = item.querySelector('.on-title').innerHTML,
                titleDetails = item.querySelector('.on-title-details').innerHTML,
                splDetails = titleDetails.split(' — '),
                splDetailsStrips = titleDetails.split(' strips'),
                splChildValue = childValue.split('$'),
                dataId = item.dataset.id;
                
            if (dataId == '0') {
                document.querySelector('.message-block').style.display = 'none';
            } else {
                document.querySelector('.message-block').style.display = 'flex';
            }
          
            document.querySelector(".select2 select").dataset.strips = splDetailsStrips[0];
            document.querySelector(".select2 select").dataset.price = splChildValue[1];
            document.querySelector('.select-choose').classList.remove('active');
            document.querySelector('.product-price .money').innerHTML = childValue;
            document.querySelector('.select-choose__current').innerHTML = `${title} (${splDetails[0]}) `;
         
            let objSelect = document.querySelector('.select2 select');
            objSelect.selectedIndex = 0;
            objSelect.dispatchEvent(new Event('change'));
    
            document.querySelector('.product-info_right .pack-val-strips').innerHTML = `${splDetails[0]}`; 
            document.querySelector('.button__add-to-cart').dataset.variant = item.querySelector('.on-variant-label').dataset.variant; 
            document.querySelector('.button__add-to-cart').dataset.id = dataId; 
            document.querySelector('.message-block_checbox').dataset.save = item.dataset.save; 
            document.querySelector('.select2 select').disabled = false;
            document.querySelector('.message-block_checbox .checkbox').checked = false;
        });
    });
    
    
    // changed text in button - Add to cart
    document.querySelector('.product-form_gray .text-no-change').innerHTML = 'Add to cart';
    
    //added img before save lable in swatch
    document.querySelectorAll('.select-choose__dropdown .save-label').forEach(function (item){
        item.insertAdjacentHTML('afterend','<img src="https://i.ibb.co/m9jVcgt/box-7.png" alt="alt">');
    });
    
    let newElementPriceLabel = document.createElement('div');
    newElementPriceLabel.className = 'row-price-label';
    document.querySelectorAll('.select-choose .on-desktop-show').forEach(function (item) {
        let oldPriceLabel = item.querySelector('.old-price-label').innerHTML,
            newPriceLabel = item.querySelector('.new-price-label').innerHTML;
        
        newElementPriceLabel.innerHTML = `<span class="new-price-label">${newPriceLabel}</span><span class="old-price-label">${oldPriceLabel}</span>`;
    
        item.append(newElementPriceLabel.cloneNode(true));
    
    });
    
    document.querySelector('.select-country select').innerHTML = document.querySelectorAll('.on-pack-wrapper select.on-select')[4].innerHTML;
    
    document.querySelector('.select-country select').addEventListener('change', function (event) {
        let free = event.target.options[event.target.selectedIndex].dataset.free,
            value = event.target.options[event.target.selectedIndex].dataset.value;
    
        if (free == 'free') {
            document.querySelector('.align-items-center .on-free-shipping-label').innerHTML = `Free Shipping`;
        } else {
            document.querySelector('.align-items-center .on-free-shipping-label').innerHTML = `Shipping from ${free}`;
        }
    
        document.querySelector('.product-arrives .on-date-text').innerHTML = value;
    });
    
    //change color star 
    document.querySelectorAll('.product-review .stamped-fa-star').forEach(function (item) {
        item.style = 'color: #F2B413!important';
    });
    
    //checked
    document.querySelector('.message-block_checbox').addEventListener('click', function () {
        if ( document.querySelector('.message-block_checbox .checkbox').checked) {
            document.querySelector('.select2 select').disabled = true;
            document.querySelector('.select2 select').selectedIndex = '0';
            document.querySelector('.pack-val-item').innerHTML = '1 pack = ';
            document.querySelector('.pack-val-strips').innerHTML = `${document.querySelector('.select2 select').dataset.strips} strips`;
            document.querySelector('.product-price .money').innerHTML = `$${this.dataset.save} USD`;
            

            window.dataLayer = window.dataLayer || [];
            dataLayer.push({
                'event': 'event-to-ga',
                'eventCategory': 'Exp — New PDP (Variant 2/B)',
                'eventAction': 'click on checkbox — Subscribe and save 10%'
            });
        } else {
            document.querySelector('.select2 select').disabled = false;
            document.querySelector('.product-price .money').innerHTML = `$${document.querySelector('.select2 select').dataset.price} USD`;  
        } 
    });
    
    document.querySelector('.button__add-to-cart').addEventListener('click', function() {
        let checkbox = document.querySelector('.message-block_checbox input'),
            dataVariant = this.dataset.variant,
            dataPack = this.dataset.pack,
            dataId = this.dataset.id;
    
        if (!checkbox.checked) {
            addItemToCart(dataVariant, dataPack);
        } else {
            if (dataId == '31272810676339') {
                addItemToCart('31272810676339', 1, '3', 'Month', '95310');
                
            
            }
            if (dataId == '32190023958643') {
                addItemToCart('32190023958643', 1, '12', 'Month', '95310');
            }
        }
        console.log(  addItemToCart());
       
    });

    document.querySelectorAll('.tooltip-container').forEach(function (item) {
        item.addEventListener('mouseover', function () {
            let itemTitle = item.previousElementSibling.innerHTML;
            window.dataLayer = window.dataLayer || [];
            dataLayer.push({
                'event': 'event-to-ga',
                'eventCategory': 'Exp — New PDP (Variant 2/B)',
                'eventAction': 'hover on tooltip',
                'eventLabel': itemTitle
            });
        });   
    });
};

//Hotjar trigger to record video sessions
(function(h,o,t,j,a,r){
    h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
    h._hjSettings={hjid:1271698,hjsv:6};
    a=o.getElementsByTagName('head')[0];
    r=o.createElement('script');r.async=1;
    r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
    a.appendChild(r);
})(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
    window.hj=window.hj||function(){(hj.q=hj.q||[]).push(arguments)};
    hj('trigger', 'new_pdp_desktop');
    

//Activation of the experiment
window.dataLayer = window.dataLayer || [];
dataLayer.push({
    'event': 'event-to-ga',
    'eventCategory': 'Exp — New PDP',
    'eventAction': 'loaded'
});