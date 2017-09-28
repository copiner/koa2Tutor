
class Animal(object):
    def run(self):
        print('Animal is running..')

class Dog(Animal):
    def run(self):
        print('Dog is runing...')
class Cat(Animal):
    def run(self):
        print('Cat is running...')

dog = Dog()
dog.run()

cat = Cat()
cat.run()

print(isinstance(cat, Cat))
