import React from 'react'
import { ListView, View, ScrollView } from 'react-native'
import TodoItem from './TodoItem'

const TodoList = ({items}) => {
  return (
    <View style={{ flex: 5, backgroundColor: 'skyblue' }}>
      <ScrollView>
        <ListView
          dataSource={listViewData(items)}
          renderRow={(item) => <TodoItem item={item} />}
          />
      </ScrollView>
    </View>
  )
}

const listViewData = (items) => {
  const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 })
  return ds.cloneWithRows(items)
}

export default TodoList