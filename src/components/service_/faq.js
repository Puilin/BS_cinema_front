import React, {Component} from 'react';
import Faq_table from './table/faq_table'
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';

class Faq extends Component {

    render() {
        const styletext={
            textAlign: 'center',
        }
        const faq = [
            {
                'id': 4,
                'name': '구매에 따른 적립금 혜택이 어떻게 되나요?',
                'date': '2021/10/20'
            }, {
                'id': 3,
                'name': '멤버십 포인트가 적립되지 않았습니다.',
                'date': '2021/11/03'
            }, {
                'id': 2,
                'name': '티켓/관람권 구매 시 카드 할부 결제 되나요?',
                'date': '2021/10/20'
            }, {
                'id': 1,
                'name': '밤새시네마의 오픈일은 언제인가요?',
                'date': '2021/12/10'
            }
        ]
        return (
            <div>
                <div class="tab-content">
                    <div id="overview" class="tab active">
                        <div class="row">
                            <div class="col-md-8 col-sm-12 col-xs-12">
                                <div class="container">
                                    <div class="row">
                                        <div class="col-md-12 col-sm-12 col-xs-12">
                                            <h3>FAQ</h3>
                                            <div class="flex-wrap-movielist mv-grid-fw"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <br/>
                    <div>
                        <Table>
                            <TableHead>
                                <TableRow>
                                    <TableCell
                                    style={{
                                            width: 50,
                                            textAlign: "center",
                                        }}>번호</TableCell>
                                    <TableCell
                                    style={{
                                            width: 700,
                                            textAlign: "center",
                                        }}>제목</TableCell>
                                    <TableCell
                                        style={{
                                            width: 200,
                                            textAlign: "center"
                                        }}
                                        align="right">게시일</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {
                                    faq.map(c => {
                                        return <Faq_table key={c.id} id={c.id} name={c.name} date={c.date} onChangeDetail={this.props.onChangeDetail} getData={function(){
                                            this.props.upData(faq);
                                        }.bind(this)
                                    }/>
                                    })
                                }
                            </TableBody>
                        </Table>
                    </div>
                </div>

            </div>

        );
    }
}

export default Faq;