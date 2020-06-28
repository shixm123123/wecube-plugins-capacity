package models

import (
	"sync"
	"fmt"
	"time"
)

var getNameLock = new(sync.RWMutex)
var WorkspaceDir string

func GetWorkspaceName() (name string) {
	getNameLock.Lock()
	name = fmt.Sprintf("R_%d", time.Now().UnixNano())
	getNameLock.Unlock()
	return name
}

func initWorkspaceDir()  {
	if Config().Cache.WorkspaceDir == "" {
		WorkspaceDir = "."
	}else{
		WorkspaceDir = Config().Cache.WorkspaceDir
		if WorkspaceDir[len(WorkspaceDir)-1:] == "/" {
			WorkspaceDir = WorkspaceDir[:len(WorkspaceDir)-1]
		}
	}
}

type RunScriptResult struct {
	Guid       string  `json:"guid"`
	Workspace  string  `json:"workspace"`
	Level      int     `json:"level"`
	Output     string  `json:"output"`
	Images     []string `json:"images"`
	FuncExpr   string  `json:"func_expr"`
	FuncA      float64  `json:"func_a"`
	FuncB      float64  `json:"func_b"`
}

type RRequestParam struct {
	Guid      string    `json:"guid"`
	XData  [][]float64  `json:"x_data"`
	YData  [][]float64  `json:"y_data"`
	XTime  bool         `json:"x_time"`
	FuncA      float64  `json:"func_a"`
	FuncB      float64  `json:"func_b"`
	AddData  []float64  `json:"add_data"`
	AddDate    float64  `json:"add_date"`
}