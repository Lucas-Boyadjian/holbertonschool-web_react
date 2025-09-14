# TypeScript Project - Holberton School

## Description

Ce projet est une introduction à **TypeScript**, un sur-ensemble de JavaScript qui ajoute des types statiques. Il explore les concepts fondamentaux de TypeScript, tels que les types, les interfaces, les classes, les fonctions, les namespaces, et bien plus encore. Le projet utilise **Webpack** pour compiler le code TypeScript et inclut des configurations pour ESLint et Jest.

---

## Table des matières

1. [Prérequis](#prérequis)
2. [Installation](#installation)
3. [Structure du projet](#structure-du-projet)
4. [Tâches](#tâches)
5. [Commandes utiles](#commandes-utiles)
6. [Concepts abordés](#concepts-abordés)
7. [Auteur](#auteur)

---

## Prérequis

Avant de commencer, assurez-vous d'avoir les outils suivants installés sur votre machine :

- **Node.js** (version 14 ou supérieure)
- **npm** (gestionnaire de paquets pour Node.js)
- **TypeScript** (installé via npm)
- **Webpack** et **Webpack Dev Server**

---

## Installation

1. Clonez ce dépôt :
   ```bash
   git clone https://github.com/<votre-utilisateur>/holbertonschool-web_react.git
   ```

2. Accédez au dossier du projet :
   ```bash
   cd holbertonschool-web_react/TypeScript
   ```

3. Installez les dépendances pour chaque tâche :
   ```bash
   cd task_0
   npm install
   ```

4. Répétez l'installation pour chaque dossier de tâche (`task_1`, `task_2`, etc.).

---

## Structure du projet

Voici la structure principale du projet :

```plaintext
TypeScript/
├── task_0/
│   ├── .eslintrc.js
│   ├── package.json
│   ├── tsconfig.json
│   ├── webpack.config.js
│   └── js/
│       └── main.ts
├── task_1/
│   ├── package.json
│   ├── tsconfig.json
│   ├── webpack.config.js
│   └── js/
│       └── main.ts
├── task_2/
│   ├── package.json
│   ├── tsconfig.json
│   ├── webpack.config.js
│   └── js/
│       └── main.ts
├── task_3/
│   ├── package.json
│   ├── tsconfig.json
│   ├── webpack.config.js
│   └── js/
│       ├── crud.d.ts
│       ├── crud.js
│       ├── interface.ts
│       └── main.ts
├── task_4/
│   ├── package.json
│   ├── tsconfig.json
│   └── js/
│       └── subjects/
│           ├── Cpp.ts
│           ├── Java.ts
│           ├── React.ts
│           ├── Subject.ts
│           └── Teacher.ts
├── task_5/
│   ├── package.json
│   ├── tsconfig.json
│   ├── webpack.config.js
│   └── js/
│       └── main.ts
├── .gitignore
└── README.md
```

---

## Tâches

### **Tâche 0 : Interface pour un étudiant**
- Créer une interface `Student` avec des propriétés comme `firstName`, `lastName`, `age`, et `location`.
- Afficher les étudiants dans un tableau HTML via le DOM.

### **Tâche 1 : Interface pour un enseignant**
- Créer une interface `Teacher` avec des propriétés obligatoires et optionnelles.
- Permettre d’ajouter des propriétés dynamiques.

### **Tâche 2 : Extension de l’interface Teacher**
- Étendre l’interface `Teacher` pour ajouter une propriété `numberOfReports`.

### **Tâche 3 : Fonction printTeacher**
- Créer une fonction `printTeacher` qui retourne l'initiale du prénom et le nom complet.

### **Tâche 4 : Classe StudentClass**
- Créer une classe `StudentClass` avec des méthodes comme `workOnHomework` et `displayName`.

### **Tâche 5 : Types avancés**
- Implémenter des interfaces `DirectorInterface` et `TeacherInterface`.
- Créer une fonction `createEmployee` pour retourner un `Director` ou un `Teacher`.

### **Tâche 6 : Fonctions spécifiques aux employés**
- Créer des fonctions `isDirector` et `executeWork` pour gérer les employés.

### **Tâche 7 : Types littéraux**
- Créer un type littéral `Subjects` et une fonction `teachClass`.

### **Tâche 8 : Namespaces et fichiers ambiants**
- Utiliser un fichier ambiant `crud.d.ts` pour typer des fonctions externes.

### **Tâche 9 : Namespaces et fusion de déclarations**
- Organiser le code avec des namespaces et étendre des interfaces via la fusion de déclarations.

### **Tâche 10 : Nominal typing**
- Implémenter des interfaces `MajorCredits` et `MinorCredits` avec des propriétés `brand`.

---

## Commandes utiles

### **Installation des dépendances**
```bash
npm install
```

### **Compiler le projet**
```bash
npm run build
```

### **Lancer le serveur de développement**
```bash
npm run start-dev
```

### **Vérifier les erreurs TypeScript**
```bash
npx tsc --noEmit
```

---

## Concepts abordés

1. **Types de base** : `string`, `number`, `boolean`, `array`, `enum`, etc.
2. **Interfaces** : Définir des structures pour les objets.
3. **Classes** : Créer des classes avec des constructeurs et des méthodes.
4. **Types avancés** : Types génériques, types littéraux, nominal typing.
5. **Namespaces** : Organiser le code en regroupant des interfaces et des classes.
6. **Manipulation du DOM** : Créer et modifier des éléments HTML avec TypeScript.
7. **Webpack et TypeScript** : Configurer Webpack pour compiler du TypeScript.

---

## Auteur

Lucas Boyadjian
