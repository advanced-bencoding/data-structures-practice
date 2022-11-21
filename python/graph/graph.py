class Graph:
    def createGraph(self):
        self.n = int(input("How many nodes does your graph have?"))
        self.G = [[0 for i in range(self.n)] for i in range(self.n)]
        self.E = []
        
        print("If there exists an edge between node i and node j, input 'i j'. (0-indexed graph. Input 'y' when you are done.)")
        while True:
            s = input("input: ")
            if s=="y":
                break
            i, j = map(int, s.split())
            self.E.append([i, j])
            self.G[i][j] = 1
        
        # print("Here is the graph you created:")
        # print(self.G)
        # print("List of edges:")
        # print(self.E)
    
    def dfs(self, source, target):
        open = [source]
        close = set()
        iterations = 0
        if source == target:
            print("Successfully reached node %d from node %d."%(target, source))
            return 0

        while len(open)>0:
            iterations += 1
            cursor = open.pop()
            if cursor == target:
                print("Successfully reached node %d from node %d."%(target, source))
                return iterations
            for i in range(self.n):
                if self.G[cursor][i] != 0 and i not in open and i not in close:
                    open.append(i)
        print("No path from node %d to node %d could be found."%(source, target))
        return iterations

    def bfs(self, source, target):
        open = [source]
        close = set()
        iterations = 0
        if source == target:
            print("Successfully reached node %d from node %d."%(target, source))
            return 0

        while len(open)>0:
            iterations += 1
            cursor = open.pop(0)
            if cursor == target:
                print("Successfully reached node %d from node %d."%(target, source))
                return iterations
            for i in range(self.n):
                if self.G[cursor][i] != 0 and i not in open and i not in close:
                    open.append(i)
        print("No path from node %d to node %d could be found."%(source, target))
        return iterations

g = Graph()
g.createGraph()
g.dfs(1,3)
g.bfs(1,3)
g.dfs(0,4)
g.bfs(0,4)