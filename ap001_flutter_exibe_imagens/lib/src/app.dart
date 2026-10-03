import 'package:flutter/material.dart'; 

class App extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
    title: 'Material App',
    home: Scaffold(
      appBar: AppBar(
        title: const Text('Minhas Imagens'),
      ),
      floatingActionButton: FloatingActionButton(
        onPressed: () {
          print('Estou no arquivo app.dart');
        },
        child: const Icon(Icons.add),
      ),
    ),
  ); 
  }
}