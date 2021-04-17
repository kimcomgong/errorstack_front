import { firestore } from "./firebase";
import { useCallback, useEffect, useState } from "react";

function Firetest() {
    const [docs, setDocs] = useState([])
    const [inputs, setInputs] = useState({
        name: '',
        age: ''
    })
    const { name, age } = inputs
    const onChange = (e) => {
        const { value, name } = e.target;
        setInputs({
            ...inputs,
            [name]: value
        })
    }

    const inputsReset = () => {
        setInputs({
            name: '',
            age: ''
        })
    }

    const fetch = useCallback(() => {
        let list = []
        firestore
            .collection("test")
            .get()
            .then((docs) => {
                docs.forEach((doc) => {
                    list.push({ id: doc.id, name: doc.data().name, age: doc.data().age })
                })
                setDocs(list)
                //setDocs((prevs) => prevs.concat(list))
            })
    }, [])



    useEffect(() => {
        fetch()
    }, [fetch])



    const remove = (id) => {
        firestore
            .collection("test")
            .doc(id)
            .delete()
            .then(() =>
                setDocs((prevs) => prevs.filter((prev) => id !== prev.id))
            )
    }

    const create = (e) => {
        e.preventDefault()
        let nAge = age * 1
        if (name !== "") {
            firestore
                .collection("test")
                .add({ name: name, age: nAge })
                .then((res) => {
                    setDocs((prevDocs) => prevDocs.concat({ id: res.id, name: name, age: age }))
                })
            inputsReset()
        }
    }

    return (
        <div className="App">
            { docs.map((doc) => {
                return (
                    <div>
                        <p key={doc} > {doc.name} {doc.age} </p>
                        <button key={doc.id} onClick={() => remove(doc.id)} > 삭제 </button>
                    </div>
                )
            })}
            <input
                name="name"
                placeholder="이름"
                onChange={onChange}
                value={name}
            />
            <input
                name="age"
                placeholder="나이"
                onChange={onChange}
                value={age}
            />
            <button onClick={create} > 등록 </button>
        </div>
    );
}

export default Firetest;
