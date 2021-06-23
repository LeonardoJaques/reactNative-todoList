import React, { useEffect, useRef, useState } from 'react'
import { TextInput, View } from 'react-native'
import CheckBox from "../CheckBox"



interface TodoItemProps {
  todo: {
    id: number
    content: string
    isCompleted: boolean
  },
  onSubmit: () => void
}

const TodoItem: React.FC<TodoItemProps> = ({ todo, onSubmit }) => {
  const [isChecked, setIsChecked] = useState(false)
  const [content, setContent] = useState("")
  const input = useRef(null)

  useEffect(() => {
    if (!todo) { return }
    setIsChecked(todo.isCompleted)
    setContent(todo.content)
  }, [todo])


  useEffect(() => {
    if (input.current)
      //@ts-ignore:
      input?.current?.focus()
  }, [input])

  const onkeyPress = ({ nativeEvent }: any) => {
    if (nativeEvent.key === "Backspace" && content === '') {
      //Delete Item
      console.warn("Delete Item");

    }

  }

  return (
    <View style={{ flexDirection: 'row', alignItems: 'center', marginVertical: 3 }}>
      <CheckBox isChecked={isChecked} onPress={() => { setIsChecked(!isChecked) }} />
      <TextInput
        value={content}
        onChangeText={setContent}
        ref={input}
        style={{
          flex: 1,
          fontSize: 14,
          color: 'white',
          width: "90%",
          borderRadius: 5,
          marginLeft: 12,
        }} multiline
        onSubmitEditing={onSubmit}
        blurOnSubmit
        onKeyPress={onkeyPress}
      />
    </View>
  )

}

export default TodoItem
