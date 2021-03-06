import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import ContentHeader from "../common/template/contentHeader";
import Content from "../common/template/content";
import Tabs from "../common/tab/Tabs";
import TabsHeader from "../common/tab/TabsHeader";
import TabsContent from "../common/tab/TabsContent";
import TabHeader from "../common/tab/TabHeader";
import TabContent from "../common/tab/TabContent";
import List from "./billingCycleList";
import Form from "./billingCycleForm";
import { init, create, update, del } from './billingCycleActions'

class BillingCycle extends Component {
    componentWillMount() {
        this.props.init()
    }
   render() {
       return (
           <div>
            <ContentHeader title='Ciclos de Pagamento' small='Cadastro'/>
            <Content>
                <Tabs>
                    <TabsHeader>
                        <TabHeader label='Listar' icon='bars' target='tabList' />
                        <TabHeader label='Incluir' icon='plus' target='tabCreate'/>
                        <TabHeader label='Alterar' icon='pencil' target='tabUpdate' />
                        <TabHeader label='Excluir' icon='trash-o' target='tabDelete' />
                    </TabsHeader>
                    <TabsContent>
                        <TabContent id='tabList'>
                            <List/>
                        </TabContent>
                        <TabContent id='tabCreate'>
                            <Form onSubmit={this.props.create}
                            submitLabel='Incluir' submitClass='primary' />
                        </TabContent>
                        <TabContent id='tabUpdate'>
                            <Form onSubmit={this.props.update}
                             submitLabel='Alterar' submitClass='info' />
                        </TabContent>
                        <TabContent id='tabDelete'>
                            <Form onSubmit={this.props.del} readOnly={true}
                            submitLabel='Excluir' submitClass='danger' />
                        </TabContent>
                    </TabsContent>
                </Tabs>
            </Content>
           </div>
       )
   }
}

const mapDispatchToProps = dispatch => bindActionCreators({init, create, update, del}, dispatch)
export default connect(null, mapDispatchToProps)(BillingCycle)