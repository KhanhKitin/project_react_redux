import React, { Component } from "react";

export default class NotPoundPage extends Component {
  render() {
    return (
      <div className="container">
        <div
          class="alert alert-warning alert-dismissible fade show"
          role="alert"
        >
          <button
            type="button"
            class="close"
            data-dismiss="alert"
            aria-label="Close"
          >
            <span aria-hidden="true">&times;</span>
          </button>
          <strong>Không tìm thấy trang</strong>
        </div>

        <script>$(".alert").alert();</script>
      </div>
    );
  }
}
