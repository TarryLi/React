import { observable, action, computed } from 'mobx';
import { message } from 'antd';

class AppStore {
    @observable list = [
        { key: 1, value: 'math' },
        { key: 2, value: 'english' },
        { key: 3, value: 'chinese' },
        { key: 4, value: 'chinese' },
        { key: 5, value: 'chinese' },
        { key: 6, value: 'chinese' }
    ]; //列表
    @observable inputValue = "";//输入框中的值
    @observable selectedRowKeys = [];//选中的值
    @observable listKey = 1;//key

    @action setKey = () => {
        this.list.forEach(() => {
            this.listKey++;
        })
    };

    //添加
    @action AddTodo = () => {
        if (this.inputValue !== '') {
            const newlist = [...this.list, { value: this.inputValue, key: this.listKey }];
            this.list = newlist;
            this.inputValue = '';
            this.listKey++;
        }else{
            message.warning('输入不能为空！')
        }
    };

    //删除选择
    @action deleteTodo() {
        this.list = this.list.filter(item => this.selectedRowKeys.indexOf(item.key) === -1)
        this.selectedRowKeys = [];
    };

    //checkbox选择
    @action checkChange = (selectedRowKeys) => {
        this.selectedRowKeys = selectedRowKeys;
    };

    //计算长度
    @computed get total() {
        return this.list.length;
    }

    //计算进度
    @computed get schedule() {
        const schedule = this.selectedRowKeys.length / this.list.length * 100;
        return Math.round(schedule);
    }

}
export default AppStore;