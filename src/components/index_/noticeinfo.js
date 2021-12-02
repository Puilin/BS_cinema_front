import React, {Component} from 'react';

class NoticeInfo extends Component {
    render() {
        return (
            <div class="col-md-8">

                <div class="title-hd">
                    <h2>공지사항</h2>
                </div>
                <div class="tabs">

                    <div class="event-table">
                        <table>
                            <th
                                style={{
                                    width: '40px',
                                    textAlign: 'center'
                                }}>번호</th>
                            <th
                                style={{
                                    width: '600px',
                                    textAlign: 'center'
                                }}>제목</th>
                            <th>등록일</th>
                            <tr>
                                <td>1</td>
                                <td
                                    style={{
                                        textAlign: 'center'
                                    }}>2021/12/10 밤새시네마 오픈!</td>
                                <td>2021.11.8</td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td
                                    style={{
                                        textAlign: 'center'
                                    }}>한파 조심하세요~</td>
                                <td>2021.11.8</td>
                            </tr>
                            <tr>
                                <td>3</td>
                                <td
                                    style={{
                                        textAlign: 'center'
                                    }}>올 크리스마스도 밤새시네마와 함께!</td>
                                <td>2021.11.8</td>
                            </tr>
                            <tr>
                                <td>4</td>
                                <td
                                    style={{
                                        textAlign: 'center'
                                    }}>밤새시네마는 밤새 운영합니다 ^^</td>
                                <td>2021.11.8</td>
                            </tr>
                        </table>
                    </div>

                </div>
                <div class="tab-content">
                    <div class="tabs">
                        <ul class="tab-links-3">
                            <li class="active">
                                <a href="#tab31">#Movies
                                </a>
                            </li>
                            <li>
                                <a href="#tab32">
                                    #TV Shows
                                </a>
                            </li>
                            <li>
                                <a href="#tab33">
                                    # Celebs</a>
                            </li>
                        </ul>
                        <div class="tab-content">
                            <div id="tab31" class="tab active">
                                <div class="row">
                                    <div class="blog-item-style-1"></div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        );
    }
}

export default NoticeInfo;