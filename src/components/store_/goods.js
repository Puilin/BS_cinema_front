import React, { Component } from 'react';

class Goods extends Component{
  render(){
    return(
<div id="overview" class="tab-content">
                    <div class="tab active">
                        <div class="row">
                            <div class="col-md-8 col-sm-12 col-xs-12">
                                <div class="container">
                                    <div class="row">
                                        <div class="col-md-12 col-sm-12 col-xs-12">
                                            <h3>굿즈</h3>
                                            <div class="flex-wrap-movielist mv-grid-fw">
                                                <div class="movie-item-style-2 movie-item-style-1">
                                                    <img src="/images/single.png" alt=""/>
                                                    <div class="hvr-inner"></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                )
  }}

  export default Goods;