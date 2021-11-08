import React, { Component } from 'react';

class Event extends Component {
    render() {
      return (
        <div>
        <div class="title-hd">
			<h2>이벤트</h2>
        </div>
        <div class="tabs">
            <div class="event-table">
                <table class="t" border="1">
                <th>테이블</th>
                <th>만들기</th>
                <tr>
                    <td>첫번째 칸</td>
                    <td>두번째 칸</td>
                </tr>
                <tr>
                    <td>첫번째 칸</td>
                    <td>두번째 칸</td>
                </tr>
                </table>
            </div>
        </div>
        </div>
      )
    }
  }

export default Event;